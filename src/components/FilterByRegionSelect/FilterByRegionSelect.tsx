import { CountryType } from '../../../types';
import './filterByRegionSelect.css';
import { IoIosArrowDown } from 'react-icons/io';

interface FilterByRegionSelectProps {
  filter: string;
  setFilter: (e: string) => void;
  countries: CountryType[] | null;
}

const FilterByRegionSelect = ({
  filter,
  setFilter,
  countries,
}: FilterByRegionSelectProps): JSX.Element => {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const getAllRegions = (): string[] => {
    if (!countries) return [];
    const result: Set<string> = new Set();
    for (let country of countries) {
      const { region } = country;
      result.add(region);
    }

    return Array.from(result);
  };

  const regions = getAllRegions();

  const regionsOptions = regions?.map((region, index) => (
    <option value={region} key={index} className='filter-by-region__option'>
      {region}
    </option>
  ));

  return (
    <div className='filter-by-region'>
      <IoIosArrowDown className='filter-by-region__icon' />
      <select
        name='filter_by_region'
        id='filter_by_region'
        onChange={handleOnChange}
        value={filter}
        className='filter-by-region__select'
      >
        <option
          value=''
          className='filter-by-region__option filter-by-region__option--empty'
        >
          Filter by Region
        </option>
        {regionsOptions}
      </select>
    </div>
  );
};
export default FilterByRegionSelect;
