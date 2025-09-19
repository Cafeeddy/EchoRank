import { Router } from 'express';
import { z } from 'zod';
import { createId, getDb } from '../lib/db.js';

export const router = Router();

const NewsletterSchema = z.object({ email: z.string().email() });

router.post('/', async (req, res) => {
  const parse = NewsletterSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid payload', details: parse.error.flatten() });
  const { email } = parse.data;
  const db = await getDb();
  const existing = db.data.newsletter.find((n: any) => n.email.toLowerCase() === email.toLowerCase());
  if (existing) return res.status(200).json({ id: existing.id, createdAt: existing.createdAt, alreadySubscribed: true });
  const id = createId();
  const createdAt = new Date().toISOString();
  db.data.newsletter.push({ id, email, createdAt });
  await db.write();
  res.status(201).json({ id, createdAt });
}); 
