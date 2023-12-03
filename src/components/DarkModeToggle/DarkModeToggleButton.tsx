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
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);
  return (
    <button onClick={handleDarkModeToggle} className='toggle-button'>
      {darkToggleIcon}
      Dark Mode
    </button>
  );
};
export default DarkModeToggleButton;
