import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI environment variable.');
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: MongooseCache | undefined;
}

const globalCache: MongooseCache = global._mongooseCache || { conn: null, promise: null };
global._mongooseCache = globalCache;

export async function connectMongo(): Promise<typeof mongoose> {
  if (globalCache.conn) return globalCache.conn;
  if (!globalCache.promise) {
    globalCache.promise = mongoose.connect(MONGODB_URI as string, {
      dbName: process.env.MONGODB_DB || undefined
    });
  }
  globalCache.conn = await globalCache.promise;
  return globalCache.conn;
}

