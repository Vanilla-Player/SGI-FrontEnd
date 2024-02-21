export default function HeaderGraphContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container min-h-[320px] rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5">
      {children}
    </div>
  );
}
