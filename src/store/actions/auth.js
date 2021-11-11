import { IS_LOGGED, USER_DETAILS, LOGOUT } from "../constants";

// export const authAction = async(payload) => {
//
// }
export const authAction = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        // const state = getState()
        
      setTimeout(() => {
        dispatch({type: IS_LOGGED, payload: true})
        dispatch({
          type: USER_DETAILS,
          payload: {...payload },
        });
        return resolve(true);
      }, 3000);
    });
  };
};

export const logout = (payload) => {
  return {
    type: LOGOUT,
    payload
  }
}
