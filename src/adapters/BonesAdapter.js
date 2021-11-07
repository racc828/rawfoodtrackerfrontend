import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Bones];

export default class BonesAdapter {
  static createBone(bone) {
    const endpoint = currentRoute.endpoints.createBone();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        name: bone.name,
        muscle: parseInt(bone.muscle),
        bone_content: parseInt(bone.bone),
        protein_id: parseInt(bone.protein_id),
      }),
    }).then((resp) => resp.json());
  }

  static getBones() {
    const endpoint = currentRoute.endpoints.getBones();

    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }
}
