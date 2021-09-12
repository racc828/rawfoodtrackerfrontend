import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Users];

export default class UsersAdapter {
  static createUser(user) {
    const endpoint = currentRoute.endpoints.createUser();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          username: user.username,
          password: user.password,
          fullname: user.firstname + " " + user.lastname,
        },
      }),
    }).then((resp) => resp.json());
    // localStorage.setItem("token", user.jwt);
  }
}
