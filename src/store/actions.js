export const setLanguage = ({ commit }, evt) => {
  const language = evt.target.value;

  commit("changeLanguage", language);
};
