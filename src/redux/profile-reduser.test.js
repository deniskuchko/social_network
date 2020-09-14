import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reduser";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "it's my first post", likesCount: 10 },
  ],
};
test("length posts should be incremented", () => {
  let action = addPostActionCreator("add post");

  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
test("message posts should be add post", () => {
  let action = addPostActionCreator("add post");

  let newState = profileReducer(state, action);
  expect(newState.posts[2].message).toBe("add post");
});

test("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});
test("after deleting length should not be  decrement if id is increment", () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});
