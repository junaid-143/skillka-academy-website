import type { NextApiRequest, NextApiResponse } from 'next';
import { requireAdmin } from '../../../lib/adminAuth';
import { connectMongo } from '../../../lib/mongodb';
import Event from '../../../models/Event';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireAdmin(req, res)) return;
  await connectMongo();

  if (req.method === 'GET') {
    try {
      const events = await Event.find().sort({ date: -1 }).lean();
      return res.status(200).json({ events });
    } catch (err: any) {
      return res.status(500).json({ error: err?.message || 'Server error' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { title, description, date, imageUrl } = req.body || {};
      if (!title) return res.status(400).json({ error: 'Title required' });
      const event = await Event.create({ title, description, date, imageUrl });
      return res.status(201).json({ success: true, event });
    } catch (err: any) {
      return res.status(500).json({ error: err?.message || 'Server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
