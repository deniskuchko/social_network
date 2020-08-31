import * as axios from "axios";

let instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "api-key": "ea93dd19-8ab1-41f1-896b-2fe3b8c089dc",
  },
});
export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 2) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  deleteFollowUsers: (id, unfollow, toogleFollowingProgress) => {
    return instance.delete(`follow/${id}`).then((response) => {
      if (response.data.resultCode === 0) {
        unfollow(id);
      }
      toogleFollowingProgress(false, id);
    });
  },
  postFollowUsers: (id, follow, toogleFollowingProgress) => {
    return instance.post(`follow/${id}`).then((response) => {
      if (response.data.resultCode === 0) {
        follow(id);
      }
      toogleFollowingProgress(false, id);
    });
  },
};
