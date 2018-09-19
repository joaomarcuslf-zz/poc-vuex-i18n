import { fetchJSON } from "@/helpers/fetch";
import { apiUrl, storage } from "@/configs";

export const hasToken = () => localStorage.getItem(storage.api) !== null;

export const getToken = () => {
  return new Promise((resolve, reject) => {
    return hasToken()
      ? resolve(localStorage.getItem(storage.api))
      : fetchJSON(`${apiUrl}/auth`)
          .then(({ token }) => token)
          .then(resolve)
          .catch(reject);
  });
};

export const setToken = token => {
  return new Promise(resolve => {
    localStorage.setItem(storage.api, token);
    return resolve(token);
  });
};
