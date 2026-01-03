import type { NextApiRequest, NextApiResponse } from 'next';
import { requireAdmin } from '../../../lib/adminAuth';
import { connectMongo } from '../../../lib/mongodb';
import Achievement from '../../../models/Achievement';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireAdmin(req, res)) return;
  await connectMongo();

  if (req.method === 'GET') {
    try {
      const achievements = await Achievement.find().sort({ _id: -1 }).lean();
      return res.status(200).json({ achievements });
    } catch (err: any) {
      return res.status(500).json({ error: err?.message || 'Server error' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { studentName, title, description, imageUrl } = req.body || {};
      if (!studentName || !title) return res.status(400).json({ error: 'studentName and title required' });
      const achievement = await Achievement.create({ studentName, title, description, imageUrl });
      return res.status(201).json({ success: true, achievement });
    } catch (err: any) {
      return res.status(500).json({ error: err?.message || 'Server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
