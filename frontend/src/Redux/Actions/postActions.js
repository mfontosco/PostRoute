import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  UPDATE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
} from "../Constants/postConstants";
import axios from "axios";

const baseUrl = "http://localhost:5000";
const createPostActions = ( title, body) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_POST_REQUEST,
    });
    const config = {
      headers: {
        "content-Type": "Application/json",
      },
    };
    const { data } = await axios.post(
      `${baseUrl}/api/v1/posts`,
      {  title, body },
      config
    );
console.log(data)
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: data.post,
    });
  } catch (err) {
    console.log(err);
    let message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch({
      type: CREATE_POST_FAIL,
      payload: message,
    });
  }
};
const getPostsActions = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_POSTS_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const { data } = await axios.get(`${baseUrl}/api/v1/posts`,config);
    console.log(data.post)

    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: data.post,
    });
  } catch (err) {
    console.log(err);
    let message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch({
      type: GET_POSTS_FAIL,
      payload: message,
    });
  }
};
const getSinglePostActions = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_POST_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const { data } = await axios.get(`${baseUrl}/api/v1/posts/${id}`,config);
    console.log(data)
    dispatch({
      type: GET_POST_SUCCESS,
      payload: data.post,
    });
  } catch (err) {
    console.log(err);
    let message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch({
      type: GET_POST_FAIL,
      payload: message,
    });
  }
};
const updatePostActions = (id,title,body) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_POST_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const { data } = await axios.put(`${baseUrl}/api/v1/posts/${id}`, {title,body}, config);
    dispatch({
      type: UPDATE_POST_SUCCESS,
      payload: data.post,
    });
  } catch (err) {
    console.log(err);
    let message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch({
      type: UPDATE_POST_FAIL,
      payload: message,
    });
  }
};
const deletePostActions = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_POST_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const { data } = await axios.delete(
      `${baseUrl}/api/v1/posts/${id}`,
      config
    );
    console.log(data)
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: data.message,
    });
  } catch (err) {
    console.log(err);
    let message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch({
      type: DELETE_POST_FAIL,
      payload: message,
    });
  }
};

export {
  createPostActions,
  getPostsActions,
  updatePostActions,
  deletePostActions,
  getSinglePostActions
};
