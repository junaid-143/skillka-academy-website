import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '../../lib/mongodb';
import Event from '../../models/Event';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();
    const events = await Event.find().sort({ date: -1 }).lean();
    return res.status(200).json({ events });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Server error' });
  }
}
