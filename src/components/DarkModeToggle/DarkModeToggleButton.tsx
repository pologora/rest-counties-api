import { useEffect, useState } from 'react';
import { FaMoon, FaRegMoon } from 'react-icons/fa';
import './darkModeToggleButton.css';

const DarkModeToggleButton = (): JSX.Element => {
  const [isDark, setIsDark] = useState(false);
  const darkToggleIcon = isDark ? <FaMoon /> : <FaRegMoon />;

  const handleDarkModeToggle = (): void => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'enabled') {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }, [isDark]);

  function enableDarkMode() {
    localStorage.setItem('dark-mode', 'enabled');
    document.body.classList.add('dark');
  }

  function disableDarkMode() {
    document.body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
  }

  return (
    <button onClick={handleDarkModeToggle} className='toggle-button'>
      {darkToggleIcon}
      Dark Mode
    </button>
  );
};
export default DarkModeToggleButton;
