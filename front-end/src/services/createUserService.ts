import { api } from "./api";

export const createUserService = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await api.post("/user/new", {
    name,
    email,
    password,
  });

  return response;
};
