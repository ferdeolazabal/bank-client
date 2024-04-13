import { LOGIN, LOGOUT } from "../types/types";

const initialState = {
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return {
        user: {},
      };
    default:
      return state;
  }
};
