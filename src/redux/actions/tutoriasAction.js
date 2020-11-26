import { types } from "../types";
import { TutoriasService } from "../../services/service";

export const setLoading = (isLoading) => {
  return {
    type: types.SET_LOADING,
    payload: isLoading,
  };
};

export const getTutoriasPersonalizadasAction = () => async (dispatch) => {
  dispatch(setLoading(true));
  const res = await TutoriasService.getTutoriasData();
  dispatch({ type: types.GET_TUTORIAS_PERSONALIZADAS, payload: res.data });
};
