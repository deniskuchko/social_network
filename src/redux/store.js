import profileReducer from "./profile-reduser";
import dialogseReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "it's my first post", likesCount: 10 },
      ],
      newPostText: "Denis Kuchko",
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Andrei",
          photo:
            "https://avatars.mds.yandex.net/get-pdb/1543345/2b507bef-1a16-433b-9495-fefc830e5efd/s1200?webp=false",
        },
        {
          id: 2,
          name: "Denis",
          photo:
            "https://c7.hotpng.com/preview/297/669/267/logo-business-shield-logo-design.jpg",
        },
        {
          id: 3,
          name: "Max",
          photo:
            "https://i2.wp.com/logos-download.com/wp-content/uploads/2016/04/Vancouver_Canucks_logo_brand.png",
        },
        {
          id: 4,
          name: "Alex",
          photo:
            "https://im0-tub-by.yandex.net/i?id=007cebb9efdd5af1628e307e0589a408&n=13",
        },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Yo" },
        { id: 3, message: "OK" },
      ],
      newMessageBody: "Hi",
    },
    sidebar: [
      {
        id: 1,
        name: "Andrei",
        photo:
          "https://avatars.mds.yandex.net/get-pdb/1543345/2b507bef-1a16-433b-9495-fefc830e5efd/s1200?webp=false",
      },
      {
        id: 2,
        name: "Denis",
        photo:
          "https://c7.hotpng.com/preview/297/669/267/logo-business-shield-logo-design.jpg",
      },
      {
        id: 3,
        name: "Max",
        photo:
          "https://i2.wp.com/logos-download.com/wp-content/uploads/2016/04/Vancouver_Canucks_logo_brand.png",
      },
      {
        id: 4,
        name: "Alex",
        photo:
          "https://im0-tub-by.yandex.net/i?id=007cebb9efdd5af1628e307e0589a408&n=13",
      },
    ],
  },
  _callSubscriber() {
    console.log("State was changed");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    /*     debugger;
     */
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogseReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
