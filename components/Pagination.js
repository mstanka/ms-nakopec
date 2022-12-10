import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({
  totalPages,
  offset,
  toItem,
  fromItem,
  handlePrevPage,
  handleNextPage,
}) {
  return (
    <div className="flex items-center justify-between bg-stone-200 dark:bg-gray-800 text-gray-500 px-4 py-3 sm:px-0 mt-16">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          href="#"
          onClick={handlePrevPage}
          disabled={fromItem <= offset}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-stone-200 dark:bg-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-50 hover:disabled:bg-stone-200 hover:disabled:dark:bg-gray-800 "
        >
          Předchozí
        </button>
        <button
          href="#"
          onClick={handleNextPage}
          disabled={toItem >= totalPages - offset}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-stone-200 dark:bg-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-50 hover:disabled:bg-stone-200 hover:disabled:dark:bg-gray-800 "
        >
          Následující
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Zobrazeno <span className="font-medium">{fromItem}</span> až{" "}
            <span className="font-medium">{toItem}</span> z{" "}
            <span className="font-medium">{totalPages}</span> výsledků
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md"
            aria-label="Pagination"
          >
            <button
              href="#"
              onClick={handlePrevPage}
              disabled={fromItem <= offset}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-stone-200 dark:bg-gray-800 px-2 py-2 text-sm font-medium hover:bg-gray-50 hover:disabled:bg-stone-200 hover:disabled:dark:bg-gray-800  focus:z-20"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              <span>Předchozí</span>
            </button>
            <button
              href="#"
              onClick={handleNextPage}
              disabled={toItem >= totalPages}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-stone-200 dark:bg-gray-800 px-2 py-2 text-sm font-medium hover:bg-gray-50 hover:disabled:bg-stone-200 hover:disabled:dark:bg-gray-800 focus:z-20"
            >
              <span>Následující</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
