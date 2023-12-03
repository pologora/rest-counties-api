import DarkModeToggleButton from '../DarkModeToggle/DarkModeToggleButton';
import './header.css';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <Link to='/'>
          <h1 className='header__title'>Where in the world!</h1>
        </Link>
        <DarkModeToggleButton />
      </div>
    </header>
  );
};
export default Header;
