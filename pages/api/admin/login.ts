import type { NextApiRequest, NextApiResponse } from 'next';
import { validateCredentials, createAdminToken } from '../../../lib/adminAuth';
import { serialize } from 'cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { username, password } = req.body || {};
    if (!validateCredentials(username, password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = createAdminToken(username);
    const cookie = serialize('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 86400,
      path: '/'
    });
    res.setHeader('Set-Cookie', cookie);
    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Server error' });
  }
}
