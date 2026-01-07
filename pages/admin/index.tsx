import { GetServerSideProps } from 'next';
import { verifyAdminToken } from '../../lib/adminAuth';
import Link from 'next/link';
import AdminHeader from '../../components/admin/AdminHeader';
import Card from '../../components/ui/Card';

export default function AdminDashboard() {
  const modules = [
    { title: 'Events', href: '/admin/events', desc: 'Manage tournaments and events' },
    { title: 'Achievements', href: '/admin/achievements', desc: 'Add student achievements' },
    { title: 'Gallery', href: '/admin/gallery', desc: 'Upload images' },
    { title: 'Registrations', href: '/admin/registrations', desc: 'View student registrations' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <AdminHeader />
      <main className="max-w-4xl mx-auto p-4 sm:p-6 grid gap-4">
        <h1 className="text-xl font-bold text-blue-700 border-b-2 border-accent pb-2">Admin Dashboard</h1>
        <div className="grid gap-3 sm:grid-cols-2">
          {modules.map((m) => (
            <Link key={m.href} href={m.href}>
              <Card>
                <h3 className="font-semibold text-base text-blue-700">{m.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{m.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.admin_token;
  if (!token || !verifyAdminToken(token)) {
    return { redirect: { destination: '/admin/login', permanent: false } };
  }
  return { props: {} };
};
