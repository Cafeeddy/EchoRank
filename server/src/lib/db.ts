import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { nanoid } from 'nanoid';

export type DatabaseSchema = {
  contacts: Array<{ id: string; name: string; email: string; message: string; createdAt: string }>;
  newsletter: Array<{ id: string; email: string; createdAt: string }>;
  consultations: Array<{ id: string; name: string; email: string; company?: string; website?: string; preferredTime?: string; notes?: string; createdAt: string }>;
  quotes: Array<{ id: string; email: string; businessSize: 'small' | 'medium' | 'large'; billingCycle: 'monthly' | 'annual'; services: { contentCreation: boolean; technicalSEO: boolean; weeklyReporting: boolean }; totalEstimate: number; createdAt: string }>;
};

export async function getDb() {
  const adapter = new JSONFile<DatabaseSchema>('server-data.json');
  const db = new Low(adapter, {
    contacts: [],
    newsletter: [],
    consultations: [],
    quotes: []
  });
  await db.read();
  return db;
}

export function createId() {
  return nanoid();
} 