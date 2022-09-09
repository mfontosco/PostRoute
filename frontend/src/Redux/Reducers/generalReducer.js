import{
    CONTACT_ADMIN_REQUEST,
    CONTACT_ADMIN_SUCCESS,
    CONTACT_ADMIN_FAIL,
    CONTACT_ADMIN_RESET
} from '../Constants/generalConstants'

const contactadminReducer = (state={}, action) => {
    switch (action.type) {
      case CONTACT_ADMIN_REQUEST:
        return { loading: true };
      case CONTACT_ADMIN_SUCCESS:
        return { loading: false, success: true, contact: action.payload };
      case CONTACT_ADMIN_FAIL:
        return { loading: false, error: action.payload };
      case CONTACT_ADMIN_RESET:
        return {};
      default:
        return state;
    }
  };

  export {contactadminReducer}