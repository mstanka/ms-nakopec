export default function LayoutGrid2Col({ children }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-2">{children}</div>
    </>
  );
}
