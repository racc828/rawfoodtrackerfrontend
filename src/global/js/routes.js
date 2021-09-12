const rootUrl = "http://localhost:3000/api/v1";
// const rootUrl = "https://murmuring-cove-43821.herokuapp.com/api/v1";

const methods = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

const token = localStorage.getItem("token");

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `${token}`,
};

export const apis = {
  Users: "users",
  Sessions: "sessions",
};

export const routes = {
  [apis.Sessions]: {
    endpoints: {
      signIn: () => ({
        url: `${rootUrl}/sessions`,
        method: methods.POST,
        headers: headers,
      }),
      currentUser: () => ({
        url: `${rootUrl}/sessions/current_user`,
        method: methods.GET,
        headers: headers,
      }),
    },
  },
};
