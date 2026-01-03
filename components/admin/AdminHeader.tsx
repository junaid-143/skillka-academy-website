import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '../ui/Button';

export default function AdminHeader() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-support to-accent border-b-2 border-primary">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/admin" className="font-bold text-white flex items-center gap-2">
          <Image src="/logo.png" alt="Skillka Chess Academy Logo" width={24} height={24} className="h-6 w-6 object-contain" /> Admin Panel
        </a>
        <Button variant="ghost" onClick={handleLogout} className="text-white border border-primary hover:bg-primary hover:text-black">Logout</Button>
      </div>
    </header>
  );
}
