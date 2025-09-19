import { Router } from 'express';
import { z } from 'zod';
import { createId, getDb } from '../lib/db.js';
import { sendMail } from '../lib/mailer';

export const router = Router();

const ContactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  message: z.string().min(1).max(5000)
});

router.post('/', async (req, res) => {
  const parse = ContactSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid payload', details: parse.error.flatten() });
  const { name, email, message } = parse.data;
  const db = await getDb();
  const id = createId();
  const createdAt = new Date().toISOString();
  db.data.contacts.push({ id, name, email, message, createdAt });
  await db.write();
  await sendMail({ subject: 'New Contact Message', text: `From: ${name} <${email}>
\n${message}` });
  res.status(201).json({ id, createdAt });
}); 
