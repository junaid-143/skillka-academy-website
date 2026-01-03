import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '../../lib/mongodb';
import Achievement from '../../models/Achievement';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();
    const achievements = await Achievement.find().sort({ _id: -1 }).lean();
    return res.status(200).json({ achievements });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Server error' });
  }
}
