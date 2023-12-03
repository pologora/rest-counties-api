import { useEffect, useState } from 'react';
import CountryList from '../CountryList/CountryList';
import FilterByRegionSelect from '../FilterByRegionSelect/FilterByRegionSelect';
import SearchCountryInput from '../SearchCountryInput/SearchCountryInput';
import './hero.css';
import { useCountriesContext } from '../../context/CountriesContext';
import { CountryType } from '../../../types';

const Hero = (): JSX.Element => {
  const { countries } = useCountriesContext();
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] =
    useState<CountryType[]>(countries);

  useEffect(() => {
    function filterAndSearchedCountries() {
      let result = [...countries];
      if (filter) {
        result = countries.filter(
          (country) => country.region.toLowerCase() === filter.toLowerCase()
        );
      }

      if (search) {
        result = result.filter((country) =>
          country.name.official.toLowerCase().includes(search)
        );
      }

      return result;
    }
    const filteredCountries = filterAndSearchedCountries();
    setFilteredCountries(filteredCountries);
  }, [filter, search, countries]);

  return (
    <main className='container'>
      <div className='search-select-container'>
        <SearchCountryInput search={search} setSearch={setSearch} />
        <FilterByRegionSelect
          filter={filter}
          setFilter={setFilter}
          countries={countries}
        />
      </div>
      {countries ? (
        <CountryList countries={filteredCountries} />
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </main>
  );
};
export default Hero;
