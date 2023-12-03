import Country from '../Country/Country';
import type { CountryType } from '../../../types';
import './countryList.css';

interface CountryListProps {
  countries: CountryType[];
}

const CountryList = ({ countries }: CountryListProps): JSX.Element => {
  const renderedCountriesElements = countries.map((country, idx) => (
    <Country key={idx} country={country} />
  ));
  return <div className='country-list'>{renderedCountriesElements}</div>;
};
export default CountryList;
