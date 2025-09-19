import { Router } from 'express';
import { z } from 'zod';
import { createId, getDb } from '../lib/db';
import { sendMail } from '../lib/mailer';

export const router = Router();

const ConsultationSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  company: z.string().optional(),
  website: z.string().url().optional(),
  preferredTime: z.string().optional(),
  notes: z.string().max(5000).optional()
});

router.post('/', async (req, res) => {
  const parse = ConsultationSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid payload', details: parse.error.flatten() });
  const data = parse.data;
  const db = await getDb();
  const id = createId();
  const createdAt = new Date().toISOString();
  db.data.consultations.push({ id, ...data, createdAt });
  await db.write();
  await sendMail({ subject: 'New Consultation Request', text: JSON.stringify({ id, ...data, createdAt }, null, 2) });
  res.status(201).json({ id, createdAt });
}); 