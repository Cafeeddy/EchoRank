import nodemailer from 'nodemailer';
import { getConfig } from './config.js';

type MailInput = {
  to?: string;
  subject: string;
  text: string;
  html?: string;
};

let transporter: nodemailer.Transporter | null = null;

function ensureTransporter() {
  if (transporter) return transporter;
  const cfg = getConfig();
  if (cfg.smtpHost && cfg.smtpUser && cfg.smtpPass) {
    transporter = nodemailer.createTransport({
      host: cfg.smtpHost,
      port: cfg.smtpPort ?? 587,
      secure: (cfg.smtpPort ?? 587) === 465,
      auth: { user: cfg.smtpUser, pass: cfg.smtpPass }
    });
  } else {
    transporter = null;
  }
  return transporter;
}

export async function sendMail({ to, subject, text, html }: MailInput) {
  const cfg = getConfig();
  const finalTo = to ?? cfg.ownerEmail;
  const tx = ensureTransporter();
  if (!finalTo) {
    // eslint-disable-next-line no-console
    console.warn('No OWNER_EMAIL configured; skipping email.');
  }
  if (!tx) {
    // eslint-disable-next-line no-console
    console.log('[MAIL:LOG-ONLY]', { to: finalTo, subject, text });
    return { queued: false, logged: true } as const;
  }
  await tx.sendMail({ from: cfg.smtpUser, to: finalTo, subject, text, html });
  return { queued: true, logged: false } as const;
} 