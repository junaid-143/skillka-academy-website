import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '../../lib/mongodb';
import Coach from '../../models/Coach';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();
    const coaches = await Coach.find().sort({ name: 1 }).lean();
    return res.status(200).json({ coaches });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Server error' });
  }
}
