'use client';

import SiteHeader from './SiteHeader';

interface HeaderProps {
  className?: string;
}

/** @deprecated Use SiteHeader directly */
export default function Header({ className = '' }: HeaderProps) {
  return <SiteHeader variant="overlay" className={className} />;
}
