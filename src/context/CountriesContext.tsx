import { createContext, useContext, useEffect, useState } from 'react';
import { getAllCountries } from '../api/apiCalls';
import type { CountryType } from '../../types';

interface CountriesContextType {
  countries: CountryType[];
}

interface CountriesContextProviderProps {
  children: JSX.Element;
}

export const CountriesContext = createContext<CountriesContextType | null>(
  null
);

export const CountriesContextProvider = ({
  children,
}: CountriesContextProviderProps) => {
  const [countries, setCountries] = useState<CountryType[]>([]);

  async function getCountries() {
    const countries = await getAllCountries();
    setCountries(countries);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <CountriesContext.Provider value={{ countries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountriesContext = () => {
  const context = useContext(CountriesContext);

  if (!context) {
    throw new Error(
      'useCountriesContext must be used inside the ThemeProvider'
    );
  }

  return context;
};
