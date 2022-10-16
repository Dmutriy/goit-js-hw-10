export default class CountrysApiService {
  #url = 'https://restcountries.com/v2/';

  constructor() {
    this.searchQuery = '';
  }

  fetchCountries() {
    const url = `${this.#url}name/${
      this.searchQuery
    }?fields=name,capital,population,flags,languages`;

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
