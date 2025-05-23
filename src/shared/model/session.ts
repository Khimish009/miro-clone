import { decodeJwt } from "jose";
import { useState } from "react";
import { createGStore } from "create-gstore";
import { publicFetchClient } from "../api/instance";

type Session = {
  userId: string;
  email: string;
  exp: number;
  iat: number;
};

const TOKEN_KEY = "token";

export const useSession = createGStore(() => {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));

  let refreshTokenPromise: Promise<string | null> | null = null;

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem(TOKEN_KEY, token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
  };

  const session = token ? decodeJwt<Session>(token) : null;

  const refreshToken = async () => {
    if (!token) return;

    const session = decodeJwt<Session>(token);

    if (session.exp < Date.now() / 1000) {
      if (!refreshTokenPromise) {
        refreshTokenPromise = publicFetchClient
          .POST("/auth/refresh")
          .then((res) => res.data?.accessToken ?? null)
          .then((newToken) => {
            if (newToken) {
              login(newToken);
              return newToken;
            } else {
              logout();
              return null;
            }
          })
          .finally(() => {
            refreshTokenPromise = null;
          });
      }

      const newToken = await refreshTokenPromise;

      if (newToken) {
        return newToken;
      } else {
        return null;
      }
    }

    return token;
  };

  return { login, logout, refreshToken, session };
});
