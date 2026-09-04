'use client';

import SiteHeader from './SiteHeader';

interface AboutHeaderProps {
  className?: string;
}

/** @deprecated Use SiteHeader directly */
export default function AboutHeader({ className = '' }: AboutHeaderProps) {
  return <SiteHeader variant="solid" className={className} />;
}
