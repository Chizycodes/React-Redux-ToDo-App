import { IS_LOGGED, USER_DETAILS } from "../constants";

const initialState = { isLogged: false, userDetails: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload
      };
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload
      };
    default:
      return state;
  }
};
