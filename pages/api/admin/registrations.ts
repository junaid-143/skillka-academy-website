import type { NextApiRequest, NextApiResponse } from 'next';
import { requireAdmin } from '../../../lib/adminAuth';
import { connectMongo } from '../../../lib/mongodb';
import Registration from '../../../models/Registration';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireAdmin(req, res)) return;
  await connectMongo();

  if (req.method === 'GET') {
    try {
      const registrations = await Registration.find().sort({ createdAt: -1 }).lean();
      return res.status(200).json({ registrations });
    } catch (err: any) {
      return res.status(500).json({ error: err?.message || 'Server error' });
    }
  }

  if (req.method === 'PATCH') {
    try {
      const { id } = req.body || {};
      if (!id) return res.status(400).json({ error: 'id required' });
      const updated = await Registration.findByIdAndUpdate(id, { processed: true }, { new: true });
      return res.status(200).json({ success: true, registration: updated });
    } catch (err: any) {
      return res.status(500).json({ error: err?.message || 'Server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
