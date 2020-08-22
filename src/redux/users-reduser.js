const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://i2.wp.com/logos-download.com/wp-content/uploads/2016/04/Vancouver_Canucks_logo_brand.png",

      followed: false,
      fullName: "Denis",
      status: "I am number one ",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      photoUrl:
        "https://i2.wp.com/logos-download.com/wp-content/uploads/2016/04/Vancouver_Canucks_logo_brand.png",

      followed: true,
      fullName: "Sasha",
      status: "I am number two ",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 3,
      photoUrl:
        "https://i2.wp.com/logos-download.com/wp-content/uploads/2016/04/Vancouver_Canucks_logo_brand.png",

      followed: false,
      fullName: "Alex",
      status: "I am number three ",
      location: { city: "Kiev", country: "Ukraine" },
    },
  ],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};
export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});
export default usersReducer;
