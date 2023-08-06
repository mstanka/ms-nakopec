export default function Layout({ children }) {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto min-h-screen bg-stone-200 dark:bg-gray-800 py-4 md:py-24 px-4 md:px-10 xl:px-20">
        {children}
      </div>
    </>
  );
}
