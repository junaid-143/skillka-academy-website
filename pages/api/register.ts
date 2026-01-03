import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '../../lib/mongodb';
import Registration from '../../models/Registration';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { name, chessLevel, age, availableTime, batch, isClubMember } = req.body || {};
    if (!name || !chessLevel || !age || !availableTime || !batch || typeof isClubMember !== 'boolean') {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    await connectMongo();
    const reg = await Registration.create({ name, chessLevel, age: Number(age), availableTime, batch, isClubMember });
    return res.status(201).json({ success: true, registration: reg });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Server error' });
  }
}
