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
  Bones: "bones",
  Portions: "portions",
  Meals: "meals",
  Veggies: "veggies",
  Nuts: "nuts",
  Fruits: "fruits",
  Organs: "organs",
  Livers: "livers",
  Muscles: "muscles",
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
  [apis.Bones]: {
    endpoints: {
      createBone: () => ({
        url: `${rootUrl}/bones`,
        method: methods.POST,
        headers,
      }),
      getBones: () => ({
        url: `${rootUrl}/bones`,
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
      getPetPortions: () => ({
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
  [apis.Meals]: {
    endpoints: {
      createMeal: () => ({
        url: `${rootUrl}/meals`,
        method: methods.POST,
        headers,
      }),
      getAllCategories: () => ({
        url: `${rootUrl}/meals`,
        method: methods.POST,
        headers,
      }),
      getPetMeals: () => ({
        url: `${rootUrl}/meals`,
        method: methods.POST,
        headers,
      }),
    },
  },
  [apis.Veggies]: {
    endpoints: {
      getVeggies: () => ({
        url: `${rootUrl}/veggies`,
        method: methods.GET,
        headers,
      }),
    },
  },
  [apis.Fruits]: {
    endpoints: {
      getFruits: () => ({
        url: `${rootUrl}/fruits`,
        method: methods.GET,
        headers,
      }),
    },
  },
  [apis.Organs]: {
    endpoints: {
      createOrgan: () => ({
        url: `${rootUrl}/organs`,
        method: methods.POST,
        headers,
      }),
      getOrgans: () => ({
        url: `${rootUrl}/organs`,
        method: methods.GET,
        headers,
      }),
    },
  },
  [apis.Muscles]: {
    endpoints: {
      createMuscle: () => ({
        url: `${rootUrl}/muscles`,
        method: methods.POST,
        headers,
      }),
      getMuscles: () => ({
        url: `${rootUrl}/muscles`,
        method: methods.GET,
        headers,
      }),
    },
  },
  [apis.Livers]: {
    endpoints: {
      createLiver: () => ({
        url: `${rootUrl}/livers`,
        method: methods.POST,
        headers,
      }),
      getLivers: () => ({
        url: `${rootUrl}/livers`,
        method: methods.GET,
        headers,
      }),
    },
  },
  [apis.Nuts]: {
    endpoints: {
      getNuts: () => ({
        url: `${rootUrl}/nuts`,
        method: methods.GET,
        headers,
      }),
    },
  },
};
