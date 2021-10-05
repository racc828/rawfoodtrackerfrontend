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
}
