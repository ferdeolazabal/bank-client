import { CHECKLOGIN, LOGIN, LOGOUT } from "../types/types";

const initialState = {
  checking: true,
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };

    case LOGOUT:
      return {
        checking: false,
        user: {},
      };

    case CHECKLOGIN:
      return {
        ...state,
        checking: false,
      };

    default:
      return state;
  }
};
