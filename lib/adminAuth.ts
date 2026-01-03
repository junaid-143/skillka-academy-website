import { createHmac } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;
const ADMIN_SECRET = process.env.ADMIN_SECRET;

if (!ADMIN_SECRET) {
  throw new Error('ADMIN_SECRET is required');
}

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_USER && password === ADMIN_PASS;
}

export function createAdminToken(username: string): string {
  const payload = JSON.stringify({ username, exp: Date.now() + 7 * 86400000 });
  const signature = createHmac('sha256', ADMIN_SECRET).update(payload).digest('hex');
  return `${Buffer.from(payload).toString('base64')}.${signature}`;
}

export function verifyAdminToken(token: string): { username: string } | null {
  try {
    const [payloadB64, signature] = token.split('.');
    const payload = Buffer.from(payloadB64, 'base64').toString('utf8');
    const expectedSig = createHmac('sha256', ADMIN_SECRET).update(payload).digest('hex');
    if (signature !== expectedSig) return null;
    const data = JSON.parse(payload);
    if (data.exp < Date.now()) return null;
    return { username: data.username };
  } catch {
    return null;
  }
}

export function requireAdmin(req: NextApiRequest, res: NextApiResponse): boolean {
  const token = req.cookies.admin_token;
  if (!token || !verifyAdminToken(token)) {
    res.status(401).json({ error: 'Unauthorized' });
    return false;
  }
  return true;
}
