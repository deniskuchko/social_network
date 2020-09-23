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
    console.warn("Obsolote method. Please profile object");
    return profileAPI.getProfile(usersId);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`);
  },

  follow(id) {
    return instance.post(`follow/${id}`);
  },
};
export const profileAPI = {
  getProfile(usersId) {
    return instance.get("profile/" + usersId);
  },
  getStatus(usersId) {
    return instance.get("profile/status/" + usersId);
  },
  updateStatus(status) {
    return instance.put("profile/status/", { status: status });
  },
  savePhoto(profileFile) {
    const formData = new FormData();
    formData.append("image", profileFile);
    return instance.put("profile/photo/", formData, {
      head: {
        "Content-type": "multipart/form-data",
      },
    });
  },
};

export const authAPI = {
  me() {
    return instance.get("auth/me");
  },
  login(email, password, rememberMe = false) {
    return instance.post("/auth/login", { email, password, rememberMe });
  },
  logout() {
    return instance.delete("/auth/login");
  },
};
