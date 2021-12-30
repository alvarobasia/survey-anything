import { api } from "./api";

export const getSurveysService = async () => {
  const response = await api.get("/survey", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token_survey"),
    },
  });
  return response;
};
