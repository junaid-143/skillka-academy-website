import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export default function Button({ className = '', variant = 'primary', ...props }: Props) {
  const styles =
    variant === 'primary'
      ? 'h-12 px-5 rounded-xl bg-primary text-white hover:bg-secondary active:bg-secondary transition font-semibold shadow-lg hover:shadow-xl'
      : 'h-12 px-5 rounded-xl hover:bg-secondary/20 transition';
  return <button className={`${styles} ${className}`} {...props} />;
}
