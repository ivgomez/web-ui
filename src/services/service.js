import { Service } from "./baseService";

export const TutoriasService = {
  async getTutoriasData() {
    const result = await Service().getTutoriasService().get(`/tutorias`);
    return result;
  },
};
