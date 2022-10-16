import { refs } from './refs';
import { cleanMarkup } from './cleanMarkup';

export function createCartInfo(response) {
  cleanMarkup();
  let markup = response.map(
    ({ name, capital, population, flags: { svg }, languages }) => {
      return /*html*/ `
            <ul class="country-info__list">
            <li class="country-info__item">
                <img class="country-info__flag" src='${svg}' alt='flag' />
                <span class="country-info__name">${name}</span>
            </li>
            <li class="country-info__item">
                <h2 class="country-info__title">Capital:</h2><p class="country-info__text">${capital}</p>
            </li>
            <li class="country-info__item">
                <h2 class="country-info__title">Population:</h2><p class="country-info__text">${population}</p>
            </li>
            <li class="country-info__item">
                <h2 class="country-info__title">Languages:</h2><p class="country-info__text">${languages.map(
                  language => {
                    return language.name;
                  }
                )}</p>
            </li>
            </ul>`;
    }
  );

  console.log('createCartInfo');

  refs.countryInfo.innerHTML = markup;
}
