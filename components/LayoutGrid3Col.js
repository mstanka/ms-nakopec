export default function LayoutGrid3Col({ children }) {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">{children}</div>
    </>
  );
}
