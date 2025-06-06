import './toggle.css';
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function Toggle({style}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setIsDarkMode(theme === 'dark');
      document.body.className = theme
    }
  }, []);

  const handleToggle = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme; // Optionally, apply the theme to the body element
  };

  return (
    <div className={`items-center flex md:ml-4 ${style}`}>
      <input
        type="checkbox"
        className={`checkbox`}
        id="checkbox"
        checked={isDarkMode}
        onChange={handleToggle}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <FaMoon className="fa-moon"/>
        <FaSun className="fa-sun"/>
        <span className="ball"></span>
      </label>
    </div>
  );
}