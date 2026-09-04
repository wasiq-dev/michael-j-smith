interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`font-body text-[0.65rem] uppercase tracking-[0.28em] text-muted ${className}`}
    >
      {children}
    </p>
  );
}
