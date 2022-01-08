export default function Footer() {
  return (
    <footer className="border-t-2 border-stone-300 mt-24 text-stone-500 text-center text-sm">
      <div className="pt-4">
        &copy; 2015 - {new Date().getFullYear()} Markéta Staňková
      </div>
    </footer>
  );
}
