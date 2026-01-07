import { GetServerSideProps } from 'next';
import { verifyAdminToken } from '../../lib/adminAuth';
import AdminHeader from '../../components/admin/AdminHeader';
import EventUploader from '../../components/admin/EventUploader';

export default function AdminEvents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <AdminHeader />
      <main className="max-w-3xl mx-auto p-4 sm:p-6">
        <h1 className="text-xl font-bold text-blue-700 border-b-2 border-accent pb-2 mb-4">Manage Events</h1>
        <EventUploader />
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
