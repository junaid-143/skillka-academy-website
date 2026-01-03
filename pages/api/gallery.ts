import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '../../lib/mongodb';
import GalleryImage from '../../models/GalleryImage';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();
    const images = await GalleryImage.find().sort({ date: -1 }).lean();
    return res.status(200).json({ images });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Server error' });
  }
}
