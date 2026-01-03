import { GetServerSideProps } from 'next';
import { verifyAdminToken } from '../../lib/adminAuth';
import AdminHeader from '../../components/admin/AdminHeader';
import RegistrationsList from '../../components/admin/RegistrationsList';

export default function AdminRegistrations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <AdminHeader />
      <main className="max-w-5xl mx-auto p-4 sm:p-6">
        <h1 className="text-xl font-bold text-blue-700 border-b-2 border-accent pb-2 mb-4">Student Registrations</h1>
        <RegistrationsList />
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
