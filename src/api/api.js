import * as axios from "axios";

let instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "api-key": "ea93dd19-8ab1-41f1-896b-2fe3b8c089dc",
  },
});
export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getProfile(usersId) {
    return instance.get("profile/" + usersId);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`);
  },

  follow(id) {
    return instance.post(`follow/${id}`);
  },
};

export const authAPI = {
  me() {
    return instance.get("https://social-network.samuraijs.com/api/1.0/auth/me");
  },
};
