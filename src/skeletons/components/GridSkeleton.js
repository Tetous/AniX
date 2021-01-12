export default function GridSkeleton({ children }) {
  return <div className="grid grid-cols-5 gap-8">{children}</div>;
}
