import { refs } from './refs';
export function cleanMarkup() {
  console.log('cleanMarkup');
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
