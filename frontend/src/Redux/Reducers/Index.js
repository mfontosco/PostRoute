import { combineReducers } from "redux";
import { createuserReducer, loginuserReducer } from "./UserReducer";
import { contactadminReducer } from "./generalReducer";
import { createPostReducer,getPostsReducer,updatePostReducer,deletePostReducer, singlePostReducer } from "./postReducer";
const rootReducer = combineReducers({
  createUser: createuserReducer,
  loginUser: loginuserReducer,
  contactAdmin: contactadminReducer,
  createPost: createPostReducer,
  getPosts:getPostsReducer,
  updatePost:updatePostReducer,
  deletePost:deletePostReducer,
  getPost:singlePostReducer
});

export default rootReducer;
