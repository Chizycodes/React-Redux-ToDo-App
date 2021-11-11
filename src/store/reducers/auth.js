import { IS_LOGGED, USER_DETAILS, LOGOUT } from "../constants";

const initialState = { isLogged: false, userDetails: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case LOGOUT:
      return {
        isLogged: false,
        userDetails: null
      };
    default:
      return state;
  }
};
