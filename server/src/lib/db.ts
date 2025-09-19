import { JSONPreset } from 'lowdb';
import { nanoid } from 'nanoid';

export type DatabaseSchema = {
  contacts: Array<{ id: string; name: string; email: string; message: string; createdAt: string }>;
  newsletter: Array<{ id: string; email: string; createdAt: string }>;
  consultations: Array<{ id: string; name: string; email: string; company?: string; website?: string; preferredTime?: string; notes?: string; createdAt: string }>;
  quotes: Array<{ id: string; email: string; businessSize: 'small' | 'medium' | 'large'; billingCycle: 'monthly' | 'annual'; services: { contentCreation: boolean; technicalSEO: boolean; weeklyReporting: boolean }; totalEstimate: number; createdAt: string }>;
};

export async function getDb() {
  const db = await JSONPreset<DatabaseSchema>('server-data.json', {
    contacts: [],
    newsletter: [],
    consultations: [],
    quotes: []
  });
  return db;
}

export function createId() {
  return nanoid();
} 