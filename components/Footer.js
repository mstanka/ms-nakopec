export default function Footer() {
  return (
    <footer className="border-t-2 border-stone-300 mt-24 text-stone-500 dark:text-gray-400 text-center text-sm">
      <div>
        <div className="py-4">
          &copy; 2015 - {new Date().getFullYear()} Markéta Staňková
        </div>
        <div className="flex justify-center gap-2">
          <a
            href="https://www.facebook.com/uphillhiking.cz"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              height="30px"
              width="30px"
              viewBox="0 0 408.788 408.788"
              fill="#57534e"
              stroke="#000000"
            >
              <g stroke-width="0"></g>
              <g stroke-linecap="round" stroke-linejoin="round"></g>
              <g>
                <path d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z"></path>
              </g>
            </svg>
          </a>

          <a
            href="https://www.youtube.com/@marketastankova"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 461.001 461.001"
              fill="#57534e"
            >
              <g stroke-width="0"></g>
              <g stroke-linecap="round" stroke-linejoin="round"></g>
              <g>
                <g>
                  <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
