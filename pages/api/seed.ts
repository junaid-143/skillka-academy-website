import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '../../lib/mongodb';
import Coach from '../../models/Coach';
import GalleryImage from '../../models/GalleryImage';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const secret = req.headers['x-seed-secret'] || req.query.secret;
  if (!process.env.SEED_SECRET || secret !== process.env.SEED_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    await connectMongo();
    // Coaches upsert
    const coaches = [
      { name: 'Sanjay S. Pillai', fideRating: 2074, bio: 'Head Coach, Former Kerala State Champion' },
      { name: 'Pathros Thrissur', fideRating: 1976, bio: 'Early coach connected to Nihal Sarin' },
      { name: 'Junaid A', fideRating: 1621 },
      { name: 'Nasar Vengara', fideRating: 1624 }
    ];
    for (const c of coaches) {
      await Coach.updateOne({ name: c.name }, { $set: c }, { upsert: true });
    }

    // Gallery sample
    const images = [1, 2, 3, 4, 5, 6].map((i) => ({
      title: `Gallery ${i}`,
      url: `https://picsum.photos/seed/skillka${i}/800/600`,
      event: i % 2 ? 'Training' : 'Tournament',
      date: new Date(Date.now() - i * 86400000)
    }));
    for (const img of images) {
      await GalleryImage.updateOne({ url: img.url }, { $setOnInsert: img }, { upsert: true });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Server error' });
  }
}
