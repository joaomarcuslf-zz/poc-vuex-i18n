import { storage } from "@/configs";

export const setToken = state => {
  state.token = localStorage.getItem(storage.api);
};
