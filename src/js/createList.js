import { refs } from './refs';
import { cleanMarkup } from './cleanMarkup';

export function createList(response) {
  cleanMarkup();
  let markup = response.map(({ name, flags: { svg } }) => {
    return /*html*/ `
      <li class="country-list__item">
        <img class="country-list__flag" src="${svg}" alt="Flag of mp${name}"/>
        <p class="country-list__name">${name}</p>
      </li>`;
  });
  console.log('createList');
  refs.countryList.insertAdjacentHTML('beforeend', markup.join(''));
}
