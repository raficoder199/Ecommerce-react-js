import React, { useEffect, useState } from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]); // Add `theme` as a dependency

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className='relative'>
      {/* Light Mode Button */}
      <img
        src={LightButton}
        alt="Light Mode Button"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-md transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      {/* Dark Mode Button */}
      <img
        src={DarkButton}
        alt="Dark Mode Button"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-md transition-all duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
};

export default Darkmode;
