import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Organs];

export default class OrgansAdapter {
  static createOrgan(organ) {
    const endpoint = currentRoute.endpoints.createOrgan();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        name: organ.name,
        protein_id: parseInt(organ.protein_id),
      }),
    }).then((resp) => resp.json());
  }
  static getOrgans() {
    const endpoint = currentRoute.endpoints.getOrgans();

    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }
}
