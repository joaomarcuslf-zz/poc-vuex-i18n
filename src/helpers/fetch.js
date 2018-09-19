import fetch from "cross-fetch";

const defaultOptions = {
  mode: "cors",
  cache: "default"
};

export const fetchJSON = (url = "", options = {}) => {
  return fetch(
    url,
    Object.assign(
      {
        method: "GET"
      },
      defaultOptions,
      options
    )
  ).then(response => {
    if (!response.ok) throw response;

    return response.json();
  });
};

export const postJSON = (url = "", options = {}) => {
  return fetch(
    url,
    Object.assign(
      {
        method: "POST"
      },
      defaultOptions,
      options
    )
  ).then(response => {
    if (!response.ok) throw response;

    return response.json();
  });
};
