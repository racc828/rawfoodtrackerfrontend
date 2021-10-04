import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Meats];

export default class MeatsAdapter {
  static createMeat(meat) {
    const endpoint = currentRoute.endpoints.createMeat();
    debugger; // eslint-disable-line
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        name: meat.name,
        muscle: parseInt(meat.muscle),
        bone: parseInt(meat.bone),
        protein_id: parseInt(meat.protein_id),
      }),
    }).then((resp) => resp.json());
  }
}
