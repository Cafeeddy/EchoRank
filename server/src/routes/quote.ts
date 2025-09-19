import { Router } from 'express';
import { z } from 'zod';
import { createId, getDb } from '../lib/db';
import { sendMail } from '../lib/mailer';

export const router = Router();

const QuoteSchema = z.object({
  email: z.string().email(),
  businessSize: z.enum(['small', 'medium', 'large']),
  billingCycle: z.enum(['monthly', 'annual']),
  services: z.object({
    contentCreation: z.boolean(),
    technicalSEO: z.boolean(),
    weeklyReporting: z.boolean()
  }),
  totalEstimate: z.number().min(0)
});

router.post('/', async (req, res) => {
  const parse = QuoteSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid payload', details: parse.error.flatten() });
  const data = parse.data;
  const db = await getDb();
  const id = createId();
  const createdAt = new Date().toISOString();
  db.data.quotes.push({ id, ...data, createdAt });
  await db.write();
  await sendMail({ subject: 'New Quote Request', text: JSON.stringify({ id, ...data, createdAt }, null, 2) });
  res.status(201).json({ id, createdAt });
}); 