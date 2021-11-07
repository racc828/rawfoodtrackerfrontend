import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Nuts];

export default class NutsAdapter {
  static getNuts() {
    const endpoint = currentRoute.endpoints.getNuts();

    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }
}
