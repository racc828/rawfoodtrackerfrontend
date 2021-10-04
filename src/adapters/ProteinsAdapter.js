import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Proteins];

export default class ProteinsAdapter {
  static getProteins() {
    const endpoint = currentRoute.endpoints.getProteins();

    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify(user),
    }).then((resp) => resp.json());
  }
}
