import type { NextApiRequest, NextApiResponse } from 'next';
import { requireAdmin } from '../../../lib/adminAuth';
import { connectMongo } from '../../../lib/mongodb';
import GalleryImage from '../../../models/GalleryImage';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireAdmin(req, res)) return;
  await connectMongo();

  if (req.method === 'GET') {
    try {
      const images = await GalleryImage.find().sort({ date: -1 }).lean();
      return res.status(200).json({ images });
    } catch (err: any) {
      return res.status(500).json({ error: err?.message || 'Server error' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { title, url, event, date } = req.body || {};
      if (!title || !url) return res.status(400).json({ error: 'title and url required' });
      const image = await GalleryImage.create({ title, url, event, date });
      return res.status(201).json({ success: true, image });
    } catch (err: any) {
      return res.status(500).json({ error: err?.message || 'Server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
