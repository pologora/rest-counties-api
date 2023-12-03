import type { CountryType } from '../../../types';
import './country.css';
import { Link } from 'react-router-dom';

interface CountryPropsType {
  country: CountryType;
}

const Country = ({ country }: CountryPropsType): JSX.Element => {
  const {
    capital,
    name: { official },
    population,
    region,
    flags: { svg, alt },
  } = country;

  return (
    <Link to={`/${country.name.common}`} className='card'>
      <div className='card__flag-container'>
        <img src={svg} alt={alt} className='card__flag' />
      </div>
      <div className='card__properties-container'>
        <h2 className='card__title'>{official}</h2>
        <p className='card__property'>
          <span className='card__property-title'>Population:</span>
          <span className='card__property-value'>
            {population.toLocaleString('en-US')}
          </span>
        </p>
        <p className='card__property'>
          <span className='card__property-title'>Region:</span>
          <span className='card__property-value'>{region}</span>
        </p>
        <p className='card__property'>
          <span className='card__property-title'>Capital:</span>
          <span className='card__property-value'>{capital}</span>
        </p>
      </div>
    </Link>
  );
};
export default Country;
