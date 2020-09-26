import { stopSubmit } from "redux-form";
import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const PHOTO_SETUP = "PHOTO_SETUP";
const DISABLED_SAVE = "DISABLED_SAVE";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "it's my first post", likesCount: 10 },
  ],
  profile: null,
  status: "",
  isPhotoSetup: false,
  isDisabledSave: false,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postsId),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    case PHOTO_SETUP:
      return {
        ...state,
        isPhotoSetup: action.isPhotoSetup,
      };
    case DISABLED_SAVE:
      return {
        ...state,
        isDisabledSave: action.isDisabledSave,
      };
    default:
      return state;
  }
};
export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUsersProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const deletePost = (postsId) => ({
  type: DELETE_POST,
  postsId,
});
export const photoSetup = (isPhotoSetup) => ({
  type: PHOTO_SETUP,
  isPhotoSetup,
});
const disabledSave = (isDisabledSave) => ({
  type: DISABLED_SAVE,
  isDisabledSave,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUsersProfile(response.data));
  };
};
export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};
export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};
export const savePhoto = (file) => {
  return async (dispatch) => {
    dispatch(photoSetup(true));
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
    dispatch(photoSetup(false));
  };
};
export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    dispatch(disabledSave(true));

    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      const contactError = response.data.messages.map((item) => {
        return item.split("->")[1].toLowerCase().split(")")[0];
      });
      contactError.forEach((element, index) => {
        debugger;
        return dispatch(
          stopSubmit("edit-profile", {
            contacts: { [element]: response.data.messages[index] },
          })
        );
      });
      return Promise.reject(response.data.messages[0]);
    }
    dispatch(disabledSave(false));
  };
};
export default profileReducer;
