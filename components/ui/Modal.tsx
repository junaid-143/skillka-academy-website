import { ReactNode } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ open, onClose, children }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40" onClick={onClose}>
      <div className="bg-white rounded-lg p-4 max-w-sm w-[92%]" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
