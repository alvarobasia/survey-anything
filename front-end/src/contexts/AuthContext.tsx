import { createContext, PropsWithChildren, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { loginService } from "../services/loginService";
import { getUserService } from "../services/getUserService";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  singIn: (email: string, password: string) => void;
  getAuthentication: () => Promise<boolean>;
};

export type User = {
  id: string;
  username: string;
  name: string;
  email: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider(props: PropsWithChildren<any>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const toast = useToast();

  async function singIn(email: string, password: string) {
    try {
      const { data } = await loginService(email, password);
      localStorage.setItem("token_survey", data.access_token);
      setUser({
        id: data.id,
        username: data.name,
        email: data.email,
        name: data.name,
      });

      setIsAuthenticated(true);
    } catch (err) {
      toast({
        title: "Login inválido",
        status: "error",
        isClosable: true,
        duration: 5000,
      });
    }
  }

  async function getAuthentication() {
    try {
      const { data } = await getUserService();
      setIsAuthenticated(true);
      setUser({
        id: data.id,
        username: data.name,
        email: data.email,
        name: data.name,
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, singIn, getAuthentication }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
