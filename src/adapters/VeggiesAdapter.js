import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Veggies];

export default class VeggiesAdapter {
  static getVeggies() {
    const endpoint = currentRoute.endpoints.getVeggies();

    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }
}
