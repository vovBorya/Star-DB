export default class SwapiService {

  _apiBase = ' https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    const response = await this.getResource(`/people/`)
    return response.results;
  }

  getPeople(id) {
    return this.getResource(`/people/${id}`);
  }

  async getAllPlanets() {
    const response = await this.getResource(`/planets/`)
    return response.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  }

  async getAllStarships() {
    const response = await this.getResource(`/starships/`)
    return response.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
}