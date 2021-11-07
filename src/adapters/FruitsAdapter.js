import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Fruits];

export default class FruitsAdapter {
  static getFruits() {
    const endpoint = currentRoute.endpoints.getFruits();

    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }
}
