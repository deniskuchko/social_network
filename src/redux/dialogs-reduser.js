const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
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
};
const dialogseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      let newMessage = {
        id: 4,
        message: body,
      };
      state.messages.push(newMessage);
      state.newMessageBody = "";

      return state;

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;

      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogseReducer;
