import 'dotenv/config';
import { connectMongo } from '../lib/mongodb';
import Coach from '../models/Coach';
import GalleryImage from '../models/GalleryImage';

async function main() {
  if (!process.env.SEED_SECRET) {
    throw new Error('SEED_SECRET must be set');
  }
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI must be set');
  }

  await connectMongo();

  const coaches = [
    { name: 'Sanjay S. Pillai', fideRating: 2074, bio: 'Head Coach, Former Kerala State Champion' },
    { name: 'Pathros Thrissur', fideRating: 1976, bio: 'Early coach connected to Nihal Sarin' },
    { name: 'Junaid A', fideRating: 1621 },
    { name: 'Nasar Vengara', fideRating: 1624 }
  ];
  for (const c of coaches) {
    await Coach.updateOne({ name: c.name }, { $set: c }, { upsert: true });
  }

  const images = [1, 2, 3, 4, 5, 6].map((i) => ({
    title: `Gallery ${i}`,
    url: `https://picsum.photos/seed/skillka${i}/800/600`,
    event: i % 2 ? 'Training' : 'Tournament',
    date: new Date(Date.now() - i * 86400000)
  }));
  for (const img of images) {
    await GalleryImage.updateOne({ url: img.url }, { $setOnInsert: img }, { upsert: true });
  }

  console.log('Seed complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
