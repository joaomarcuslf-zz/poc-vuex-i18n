import i18n from "@/middlewares/i18n";

export const setLanguage = (state, language) => {
  state.language = language;
  i18n.locale = language;
};
