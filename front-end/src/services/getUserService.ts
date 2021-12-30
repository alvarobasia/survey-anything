import { api } from "./api";

export const getUserService = async () => {
  const response = await api.get("/user/info", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token_survey"),
    },
  });
  return response;
};
