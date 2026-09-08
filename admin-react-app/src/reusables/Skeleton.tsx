interface SkeletonProps {
  className?: string;
}

function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`animate-pulse rounded bg-[#e5e7eb] ${className}`} />;
}

export default Skeleton;
