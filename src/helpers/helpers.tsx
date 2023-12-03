import type { CountryType } from '../../types';

export function getBorderCountries(
  borders: string[],
  countries: CountryType[]
) {
  const result = countries
    .filter((country) => {
      if (borders.includes(country.cca3)) {
        return true;
      } else return false;
    })
    .map((item) => item.name.common);
  return result;
}

export function getCommonNativeName(nativeName: {
  [key: string]: { official: string; common: string };
}) {
  const key = Object.keys(nativeName)[0];
  return nativeName[key].common;
}

export function getCurrencies(currencies: { [key: string]: { name: string } }) {
  const currenciesList: string[] = [];
  Object.keys(currencies).forEach((item) => {
    const currency = currencies[item].name;
    currenciesList.push(currency);
  });

  return currenciesList;
}

type AllCountryLanguage = {
  [key: string]: string;
};

export function getLanguages(languages: AllCountryLanguage) {
  const languagesList: string[] = [];
  Object.keys(languages).forEach((item) => {
    const language = languages[item];
    languagesList.push(language);
  });

  return languagesList;
}
