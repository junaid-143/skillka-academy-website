import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function Card({ children }: Props) {
  return <div className="border-2 border-support hover:border-accent transition rounded-lg p-4 shadow-sm bg-white">{children}</div>;
}
