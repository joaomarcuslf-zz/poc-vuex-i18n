import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "pt",
  messages: {
    pt: require("@/languages/pt_BR"),
    en: require("@/languages/en_US")
  }
});

export default i18n;
