export default function Layout({ children }) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto min-h-screen py-24 bg-stone-200 px-4 md:px-16">
        {children}
      </div>
    </>
  );
}
