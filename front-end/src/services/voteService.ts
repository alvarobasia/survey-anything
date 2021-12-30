import { api } from "./api";

export const voteService = async (optionId: number) => {
  const response = await api.get("/survey/" + optionId, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token_survey"),
    },
  });
  return response;
};
