import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  CalendarIcon,
  TagIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { CustomLink } from "./CustomLink";
import ThemeSwitch from "./ThemeSwitch";

const menuItems = [
  {
    name: "Proč na kopec",
    href: "/",
    icon: PhotoIcon,
  },
  {
    name: "Nejnovější příspěvky",
    href: "/posts",
    icon: CalendarIcon,
  },
  {
    name: "Kategorie",
    href: "/tags",
    icon: TagIcon,
  },
];

export default function NavigationMenu() {
  return (
    <Popover className="relative md:border-b-2 border-stone-300">
      <div className="-my-2 mr-2 flex justify-between items-center md:hidden">
        <ThemeSwitch />
        <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-700 focus:dark:text-cyan-500">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <div className="hidden md:flex justify-between items-center sticky top-0">
        <div className="relative flex  px-5 py-4 sm:gap-5 sm:p-2">
          {menuItems.map((item) => (
            <CustomLink
              key={item.name}
              href={item.href}
              className="flex items-center rounded-lg px-3 py-1 hover:bg-stone-100"
            >
              <item.icon
                className="h-6 w-6 flex-shrink-0 text-cyan-700 dark:text-cyan-500"
                aria-hidden="true"
              />
              <div className="ml-4">
                <p className="text-base font-medium text-stone-600">
                  {item.name}
                </p>
              </div>
            </CustomLink>
          ))}
        </div>
        <ThemeSwitch />
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="rounded-lg bg-stone-100  dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-12 realative z-20">
              <div className="flex justify-end">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-stone-100 dark:bg-gray-800 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-700 focus:dark:text-cyan-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-stone-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-cyan-700 dark:text-cyan-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-stone-600 dark:text-stone-400">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
