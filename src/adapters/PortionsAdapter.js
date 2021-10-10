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
        vegetable: parseInt(portion.vegetable),
        liver: parseInt(portion.liver),
        organ: parseInt(portion.organ),
        nut: parseInt(portion.nut),
        fruit: parseInt(portion.fruit),
        pet_id: parseInt(portion.petId),
      }),
    }).then((resp) => resp.json());
  }

  static getPetPortions(pet_id) {
    const endpoint = currentRoute.endpoints.getPetPortions();
    return fetch(`${endpoint.url}/get_pet_portions`, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        pet_id,
      }),
    }).then((resp) => resp.json());
  }
}
