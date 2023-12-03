import { IoMdSearch } from 'react-icons/io';
import './searchCountryInput.css';

interface SearchCountryInputProps {
  search: string;
  setSearch: (e: string) => void;
}

const SearchCountryInput = ({
  search,
  setSearch,
}: SearchCountryInputProps): JSX.Element => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className='search'>
      <div className='search__icon'>
        <IoMdSearch />
      </div>
      <input
        type='text'
        id='search-input'
        value={search}
        onChange={handleOnChange}
        className='search__input'
        placeholder='Search for a country...'
      />
    </div>
  );
};
export default SearchCountryInput;
