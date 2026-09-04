import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

const variants = {
  primary:
    'bg-accent text-[#080808] hover:bg-accent/90 border border-accent',
  secondary:
    'bg-transparent text-foreground border border-foreground/30 hover:border-accent hover:text-accent',
  ghost:
    'bg-transparent text-muted border border-transparent hover:text-accent',
};

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
