import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Meals];

export default class MealsAdapter {
  static createMeal(meal) {
    const endpoint = currentRoute.endpoints.createMeal();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        name: meal.name,
        pet_id: parseInt(meal.petId),
        foods: meal.foodTypes,
      }),
    }).then((resp) => resp.json());
  }

  static getPetMeals(petId) {
    const endpoint = currentRoute.endpoints.getPetMeals();
    return fetch(`${endpoint.url}/get_pet_meals`, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        pet_id: parseInt(petId),
      }),
    }).then((resp) => resp.json());
  }

  static getAllCategories() {
    const endpoint = currentRoute.endpoints.getAllCategories();
    return fetch(`${endpoint.url}/get_all_categories`, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }
}
