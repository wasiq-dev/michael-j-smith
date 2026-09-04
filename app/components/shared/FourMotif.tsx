interface FourMotifProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 'text-[8rem]',
  md: 'text-[12rem]',
  lg: 'text-[18rem]',
  xl: 'text-[24rem]',
};

export default function FourMotif({
  className = '',
  size = 'lg',
}: FourMotifProps) {
  return (
    <span
      aria-hidden="true"
      className={`four-motif pointer-events-none select-none font-accent ${sizeMap[size]} ${className}`}
    >
      4
    </span>
  );
}
