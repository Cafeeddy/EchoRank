export type AppConfig = {
  port: number;
  corsOrigins: string[];
  ownerEmail?: string;
  smtpHost?: string;
  smtpPort?: number;
  smtpUser?: string;
  smtpPass?: string;
};

export function getConfig(): AppConfig {
  const port = Number(process.env.PORT ?? 4000);
  const corsOriginsEnv = process.env.CORS_ORIGINS ?? 'http://localhost:5173';
  const corsOrigins = corsOriginsEnv.split(',').map(s => s.trim()).filter(Boolean);
  const ownerEmail = process.env.OWNER_EMAIL;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  return { port, corsOrigins, ownerEmail, smtpHost, smtpPort, smtpUser, smtpPass };
} 