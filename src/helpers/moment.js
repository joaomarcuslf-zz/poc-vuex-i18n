import * as moment from "moment-timezone";

const localesDict = {
  pt: "pt-BR",
  en: "en",
  fr: "fr"
};

export default (locale = "pt") => {
  moment.locale(localesDict[locale]);

  return moment().tz("America/Sao_Paulo");
};
