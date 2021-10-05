import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Portions];

export default class PortionsAdapter {
  static createPortion(portion) {
    const endpoint = currentRoute.endpoints.createPortion();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        muscle: parseInt(portion.muscle),
        bone: parseInt(portion.bone),
        vegetable: parseInt(portion.bone),
        liver: parseInt(portion.liver),
        secretingOrgan: parseInt(portion.secretingOrgan),
        nut: parseInt(portion.nut),
        fruit: parseInt(portion.fruit),
        pet_id: parseInt(portion.petId),
      }),
    }).then((resp) => resp.json());
  }
}
