export default function Layout({ children }) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto min-h-screen bg-stone-200 py-4 md:py-24 px-4 md:px-32">
        {children}
      </div>
    </>
  );
}
