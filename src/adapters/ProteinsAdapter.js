import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Proteins];

export default class ProteinsAdapter {
  static getProteins() {
    const endpoint = currentRoute.endpoints.getProteins();

    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }

  static createProtein(protein) {
    const endpoint = currentRoute.endpoints.createProtein();
    debugger; // eslint-disable-line
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        name: protein.name,
      }),
    }).then((resp) => resp.json());
    // localStorage.setItem("token", user.jwt);
  }
}
