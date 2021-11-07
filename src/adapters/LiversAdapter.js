import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Livers];

export default class LiversAdapter {
  static createLiver(liver) {
    const endpoint = currentRoute.endpoints.createLiver();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        name: liver.name,
        protein_id: parseInt(liver.protein_id),
      }),
    }).then((resp) => resp.json());
  }
  static getLivers() {
    const endpoint = currentRoute.endpoints.getLivers();

    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }
}
