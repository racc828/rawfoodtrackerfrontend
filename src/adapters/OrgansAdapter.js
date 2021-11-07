import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Organs];

export default class OrgansAdapter {
  static getOrgans() {
    const endpoint = currentRoute.endpoints.getOrgans();

    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }
}
