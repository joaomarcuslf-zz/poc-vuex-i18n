import i18n from "@/middlewares/i18n";

export const changeLanguage = (state, language) => {
  state.language = language;
  i18n.locale = language;
};
