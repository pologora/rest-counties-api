import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/DetailCard/CountryDetails';
import { CountriesContextProvider } from './context/CountriesContext';

function App(): JSX.Element {
  return (
    <div className='wrapper'>
      <Header />
      <CountriesContextProvider>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/:country' element={<CountryDetails />} />
        </Routes>
      </CountriesContextProvider>
    </div>
  );
}

export default App;
