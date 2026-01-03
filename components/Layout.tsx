import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-0">{children}</main>
      <Footer />
    </div>
  );
}
