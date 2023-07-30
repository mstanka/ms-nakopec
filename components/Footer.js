export default function Footer() {
  return (
    <footer className="border-t-2 border-stone-300 mt-24 text-stone-500 dark:text-gray-400 text-center text-sm">
      <div>
        <div className="py-4">
          &copy; 2015 - {new Date().getFullYear()} Markéta Staňková
        </div>
        <a
          href="https://www.facebook.com/uphillhiking.cz"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center"
        >
          <svg className="w-10 h-10">
            <linearGradient
              id="a"
              x1="-277.375"
              x2="-277.375"
              y1="406.6018"
              y2="407.5726"
              gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#0062e0" />
              <stop offset="1" stopColor="#19afff" />
            </linearGradient>
            <path
              fill="url(#a)"
              d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
            />
            <path
              fill="#fff"
              d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
