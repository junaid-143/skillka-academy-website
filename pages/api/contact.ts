import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '../../lib/mongodb';
import ContactMessage from '../../models/ContactMessage';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !phone || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    await connectMongo();
    const doc = await ContactMessage.create({ name, email, phone, message });
    return res.status(201).json({ success: true, message: doc });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Server error' });
  }
}
