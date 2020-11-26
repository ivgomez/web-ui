import { types } from "../types";

const initialState = {
  tutoriasPersonalizadas: [],
  isLoading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TUTORIAS_PERSONALIZADAS:
      return {
        ...state,
        tutoriasPersonalizadas: action.payload,
        isLoading: false,
      };
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
