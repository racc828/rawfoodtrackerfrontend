import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Pets];

export default class PetsAdapter {
  static getPet(petId) {
    const endpoint = currentRoute.endpoints.getPet();

    return fetch(`${endpoint.url}/${parseInt(petId)}`, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }

  static createPet(pet) {
    const endpoint = currentRoute.endpoints.createPet();
    debugger; // eslint-disable-line
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        name: pet.name,
        breed: pet.breed,
        age: parseInt(pet.age),
        user_id: parseInt(pet.userId),
      }),
    }).then((resp) => resp.json());
  }
}
