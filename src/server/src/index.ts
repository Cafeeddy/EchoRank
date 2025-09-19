import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { router as contactRouter } from './routes/contact';
import { router as newsletterRouter } from './routes/newsletter';
import { router as consultationRouter } from './routes/consultation';
import { router as quoteRouter } from './routes/quote';
import { getConfig } from './lib/config';

const app = express();
const config = getConfig();

app.use(cors({
  origin: config.corsOrigins,
  credentials: false
}));
app.use(express.json({ limit: '1mb' }));

const limiter = rateLimit({ windowMs: 60_000, max: 100 });
app.use(limiter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'echorank-api', timestamp: new Date().toISOString() });
});

app.use('/api/contact', contactRouter);
app.use('/api/newsletter', newsletterRouter);
app.use('/api/consultation', consultationRouter);
app.use('/api/quote', quoteRouter);

const port = config.port;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`EchoRank API listening on http://localhost:${port}`);
}); 