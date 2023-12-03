import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3.1/';
const allNeededCountryFields = [
  'nativeName',
  'name',
  'population',
  'region',
  'subregion',
  'capital',
  'tld',
  'currencies',
  'languages',
  'borders',
  'cca3',
  'flags',
];

export async function getAllCountries() {
  const filter = allNeededCountryFields.toString();
  try {
    const url = `/all?fields=${filter}`;
    const { data } = await axios(url);
    return data;
  } catch (error: any) {
    console.log(error);
  }
}
