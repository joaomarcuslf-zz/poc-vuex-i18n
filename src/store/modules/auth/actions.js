import { hasToken, getToken, setToken } from "@/helpers/storage";

export const getAuthToken = ({ commit }) => {
  const actionSetToken = () => commit("setToken");

  if (!hasToken()) {
    return getToken()
      .then(setToken)
      .then(actionSetToken)
      .catch(err => {
        console.err("ERROR: action getAuthToken", err);
        return err;
      });
  }

  return actionSetToken();
};
