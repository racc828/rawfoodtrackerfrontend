import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Muscles];

export default class MusclesAdapter {
  static createMuscle(muscle) {
    const endpoint = currentRoute.endpoints.createMuscle();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        name: muscle.name,
        protein_id: parseInt(muscle.protein_id),
      }),
    }).then((resp) => resp.json());
  }
  static getMuscles() {
    const endpoint = currentRoute.endpoints.getMuscles();

    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }
}
