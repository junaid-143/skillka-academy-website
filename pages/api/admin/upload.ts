import type { NextApiRequest, NextApiResponse } from 'next';
import { requireAdmin } from '../../../lib/adminAuth';
import formidable, { IncomingForm } from 'formidable';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

export const config = { api: { bodyParser: false } };

cloudinary.config({ cloudinary_url: process.env.CLOUDINARY_URL });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!requireAdmin(req, res)) return;

  try {
    const form = new IncomingForm({ maxFileSize: 5 * 1024 * 1024 });
    const { files } = await new Promise<{ files: formidable.Files }>((resolve, reject) => {
      form.parse(req, (err, _fields, files) => (err ? reject(err) : resolve({ files })));
    });

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    const result = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'skillka-chess' },
        (error, result) => (error ? reject(error) : resolve(result))
      );
      const readStream = require('fs').createReadStream(file.filepath);
      readStream.pipe(uploadStream);
    });

    return res.status(200).json({ url: result.secure_url });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Upload failed' });
  }
}
