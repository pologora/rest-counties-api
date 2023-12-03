import './countryDetails.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useCountriesContext } from '../../context/CountriesContext';
import { useState, useEffect } from 'react';
import { CountryType } from '../../../types';
import {
  getBorderCountries,
  getCommonNativeName,
  getCurrencies,
  getLanguages,
} from '../../helpers/helpers';

const CountryDetails = () => {
  const { country } = useParams();
  const { countries } = useCountriesContext();
  const [data, setData] = useState<CountryType>();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    function getCountryData() {
      const data = countries.find((item) => item.name.common === country);
      if (data) {
        setData(data);
      }
    }
    getCountryData();
  }, [country, countries]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    flags: { svg, alt },
    population,
    region,
    subregion,
    capital,
    tld,
    name: { common, nativeName },
    currencies,
    languages,
    borders,
  } = data;

  const nativeCommonName = getCommonNativeName(nativeName);
  const currenciesList = getCurrencies(currencies).map((item) => (
    <li key={item} className='country-details__currencies-list-item'>
      {item}
    </li>
  ));

  const languagesList = getLanguages(languages).map((item) => (
    <li className='country-details__languages-list-item' key={item}>
      {item}
    </li>
  ));

  const borderCountriesListElements = getBorderCountries(
    borders,
    countries
  ).map((item) => {
    return (
      <li className='' key={item}>
        <Link
          to={`/${item}`}
          className='country-details__border-country-list-item'
        >
          {item}
        </Link>
      </li>
    );
  });

  const domainList = tld.map((item) => (
    <li className='country-details__domain-list-item' key={item}>
      {item}
    </li>
  ));

  return (
    <article className='country-details container'>
      <button className='country-details__back-button' onClick={handleGoBack}>
        <IoIosArrowRoundBack className='country-details__back-button-icon' />
        <span className='country-details__back-button-text'>Back</span>
      </button>
      <div className='country-details__content'>
        <div className='country-details__flag-container'>
          <img src={svg} alt={alt} className='country-details__flag' />
        </div>

        <div className='country-details__properties-list'>
          <h2 className='country-details__name'>{common}</h2>
          <div className='country-details__properties-container'>
            <div className='country-details__properties-list-main'>
              <p className='country-details__native-name country-details__property'>
                <span className='country-details__property-title'>
                  Native Name:
                </span>
                <span className='country-details__property-value'>
                  {nativeCommonName}
                </span>
              </p>
              <p className='country-details__population country-details__property'>
                <span className='country-details__property-title'>
                  Population:
                </span>
                <span className='country-details__property-value'>
                  {population.toLocaleString('en-US')}
                </span>
              </p>
              <p className='country-details__region country-details__property'>
                <span className='country-details__property-title '>
                  Region:
                </span>
                <span className='country-details__property-value'>
                  {region}
                </span>
              </p>
              <p className='country-details__sub-region country-details__property'>
                <span className='country-details__property-title'>
                  Sub Region:
                </span>
                <span className='country-details__property-value'>
                  {subregion}
                </span>
              </p>
              <p className='country-details__capital country-details__property'>
                <span className='country-details__property-title '>
                  Capital:
                </span>
                <span className='country-details__property-value'>
                  {capital}
                </span>
              </p>
            </div>
            <div className='country-details__properties-list-secondary'>
              <p className='country-details__domain country-details__property'>
                <span className='country-details__property-title'>
                  Top Level Domain:
                </span>
                <ul className='country-details__domain-list'>{domainList}</ul>
              </p>
              <p className='country-details__currencies country-details__property'>
                <span className='country-details__property-title'>
                  Currencies:
                </span>
                <ul className='country-details__currencies-list'>
                  {currenciesList}
                </ul>
              </p>
              <p className='country-details__languages country-details__property'>
                <span className='country-details__property-title'>
                  Languages:
                </span>
                <ul className='country-details__languages-list'>
                  {languagesList}
                </ul>
              </p>
            </div>
          </div>
          <div className='country-details__border-country-list-container'>
            <h3 className='country-details__border-country-list-title'>
              Border Countries:
            </h3>
            <ul className='country-details__border-country-list'>
              {borderCountriesListElements}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};
export default CountryDetails;
