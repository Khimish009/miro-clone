import { decodeJwt } from "jose";
import { useState } from "react";
import { createGStore } from "create-gstore";

type Session = {
  userId: string;
  email: string;
  exp: number;
  iat: number;
};

const TOKEN_KEY = "token";

export const useSession = createGStore(() => {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem(TOKEN_KEY, token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
  };

  const session = token ? decodeJwt<Session>(token) : null;

  return { login, logout, session, token };
});
