# Skillka Chess Academy Website

Mobile-first Next.js (pages router) site using TypeScript and Tailwind CSS for Indian/Kerala users.

## Requirements
- Node.js 18+
- pnpm or npm

## Setup

```bash
# install deps
npm install

# run dev server
npm run dev

# build
npm run build

# start production
npm run start
```

Notes:
- Designed mobile-first. Buttons >=44px. Sticky header.
- No backend logic in Part 1. MongoDB placeholder only.

## Environment

Create a `.env.local` file with:

```
MONGODB_URI="your-mongodb-atlas-connection-string"
SEED_SECRET="set-a-strong-secret"

# Admin Panel
ADMIN_USER="admin"
ADMIN_PASS="your-secure-password"
ADMIN_SECRET="admin-hmac-secret-key"

# Cloudinary (for image uploads)
CLOUDINARY_URL="cloudinary://API_KEY:API_SECRET@CLOUD_NAME"
```

### MongoDB Atlas Setup
1. Create account at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create free cluster
3. Add database user
4. Whitelist IP (0.0.0.0/0 for dev)
5. Get connection string → add to `MONGODB_URI`

### Cloudinary Setup
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your `CLOUDINARY_URL` from dashboard
3. Paste into `.env.local`

### Admin Access
- Default username: `admin`
- Set strong password in `ADMIN_PASS`
- Access at `/admin/login`

## Seed data

```bash
# requires MONGODB_URI and SEED_SECRET in env
npm run seed
```

Or via API (when dev server is running):

```bash
curl -X POST -H "x-seed-secret: $SEED_SECRET" http://localhost:3000/api/seed
```

## Deployment (Vercel)

1. Push code to GitHub
2. Connect repo to [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `SEED_SECRET`
   - `ADMIN_USER`
   - `ADMIN_PASS`
   - `ADMIN_SECRET`
   - `CLOUDINARY_URL`
4. Deploy

After deploy, run seed via API:
```bash
curl -X POST -H "x-seed-secret: YOUR_SECRET" https://your-domain.vercel.app/api/seed
```

## Admin Panel

Access: `/admin/login`

Features:
- Upload events with images
- Add student achievements
- Manage gallery
- View registrations

All image uploads use Cloudinary for CDN delivery.
