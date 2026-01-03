import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function AdminLogin() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);
    const payload = { username: form.get('username'), password: form.get('password') };
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      router.push('/admin');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    }
  }

  return (
    <div className="min-h-screen grid place-items-center p-4 bg-gradient-to-br from-blue-600 to-blue-800">
      <form className="w-full max-w-sm grid gap-4 bg-white rounded-xl p-6 shadow-2xl border-2 border-accent" onSubmit={onSubmit}>
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl">♔</span>
          <h1 className="text-xl font-bold text-blue-700">Admin Login</h1>
        </div>
        <Input label="Username" name="username" required />
        <Input label="Password" name="password" type="password" required />
        {error && <div className="text-sm p-3 rounded bg-red-50 text-red-700">{error}</div>}
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
