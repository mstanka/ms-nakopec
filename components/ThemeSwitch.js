import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Switch from "react-switch";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark" ? true : false;

  const [checked, setChecked] = useState(dark);
  const [mounted, setMounted] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTheme(checked ? "dark" : "light");
  }, [checked, setTheme]);

  if (!mounted) return null;

  return (
      <Switch
        onChange={handleChange}
        checked={checked}
        aria-label="switch between day and night themes"
        offColor="#57534e"
        onColor="#e7e5e4"
        onHandleColor="#57534e"
        offHandleColor="#e7e5e4"
        handleDiameter={20}
        uncheckedIcon={
          <div className="flex justify-center items-center h-full">
            <SunIcon className="h-6 w-6 text-stone-200" />
          </div>
        }
        checkedIcon={
          <div className="flex justify-center items-center h-full">
            <MoonIcon className="h-6 w-6 text-stone-600" />
          </div>
        }
        height={26}
        width={52}
        className="bg-stone-400 mx-3"
      />
  );
};

export default ThemeSwitch;
