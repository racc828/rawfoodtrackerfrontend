const rootUrl = "http://localhost:3000/api/v1";
// const rootUrl = "https://murmuring-cove-43821.herokuapp.com/api/v1";

const methods = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

const token = localStorage.getItem("token");

const authorizedHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `${token}`,
};

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const apis = {
  Users: "users",
  Sessions: "sessions",
  Proteins: "proteins",
  Meats: "meats",
  Portions: "portions",
};

export const routes = {
  [apis.Sessions]: {
    endpoints: {
      signIn: () => ({
        url: `${rootUrl}/sessions`,
        method: methods.POST,
        headers: authorizedHeaders,
      }),
      currentUser: () => ({
        url: `${rootUrl}/sessions/current_user`,
        method: methods.GET,
        headers: authorizedHeaders,
      }),
    },
  },
  [apis.Users]: {
    endpoints: {
      createUser: () => ({
        url: `${rootUrl}/users`,
        method: methods.POST,
        headers,
      }),
    },
  },
  [apis.Proteins]: {
    endpoints: {
      getProteins: () => ({
        url: `${rootUrl}/proteins`,
        method: methods.GET,
        headers,
      }),
      createProtein: () => ({
        url: `${rootUrl}/proteins`,
        method: methods.POST,
        headers,
      }),
    },
  },
  [apis.Meats]: {
    endpoints: {
      createMeat: () => ({
        url: `${rootUrl}/meats`,
        method: methods.POST,
        headers,
      }),
      getMeats: () => ({
        url: `${rootUrl}/meats`,
        method: methods.GET,
        headers,
      }),
    },
  },
  [apis.Portions]: {
    endpoints: {
      createPortion: () => ({
        url: `${rootUrl}/portions`,
        method: methods.POST,
        headers,
      }),
    },
  },
  [apis.Pets]: {
    endpoints: {
      getPet: () => ({
        url: `${rootUrl}/pets`,
        method: methods.GET,
        headers,
      }),
      createPet: () => ({
        url: `${rootUrl}/pets`,
        method: methods.POST,
        headers,
      }),
    },
  },
};
