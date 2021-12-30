import { api } from "./api";

export const loginService = async (email: string, password: string) => {
  const response = await api.post("/user/login", {
    username: email,
    password,
  });
  return response;
};
