import { api } from "./api";

export const createSurveyService = async (survey: SurveyInput) => {
  return await api.post("/survey/new", survey, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token_survey"),
    },
  });
};
