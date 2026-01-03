import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ label, className = '', ...props }: Props) {
  return (
    <label className="grid gap-1 text-sm">
      {label && <span className="font-medium">{label}</span>}
      <input
        className={`h-11 px-3 rounded border border-support focus:outline-none focus:ring-2 focus:ring-support ${className}`}
        {...props}
      />
    </label>
  );
}
