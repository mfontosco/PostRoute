import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_RESET,
  LOGIN_USER_RESET,
} from "../Constants/UserConstants";

const createuserReducer = (state={}, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return { loading: true };
    case CREATE_USER_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case CREATE_USER_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_USER_RESET:
      return {};
    default:
      return state;
  }
};
const loginuserReducer = (state={}, action) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        return { loading: true };
      case LOGIN_USER_SUCCESS:
        return { loading: false, success: true, user: action.payload };
      case LOGIN_USER_FAIL:
        return { loading: false, error: action.payload };
      case LOGIN_USER_RESET:
        return {};
      default:
        return state;
    }
  };


export{
    createuserReducer,
    loginuserReducer
}
