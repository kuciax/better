import { IToken } from "../type/Token";

const key = "better";

export const setToken = (token: string, tokenExpires: string): void => {
  localStorage.setItem(
    key,
    JSON.stringify({ value: token, expires: new Date(tokenExpires) })
  );
};

export const getToken = (): IToken | undefined => {
  const token = localStorage.getItem(key);
  if (token) {
    return JSON.parse(token) as IToken;
  }
};

export const isTokenValid = () : boolean => {
  const token = getToken();
  const nowTime = new Date().getTime();
  if (token) {
    const currentTokenTime = new Date(token.expires).getTime();
    return currentTokenTime - nowTime > 0;
  }
  return false;
};
