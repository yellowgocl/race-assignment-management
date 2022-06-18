import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

// translations are already at
// '../public/locales/en/translation.json'
// which is the default for the xhr backend to load from

i18n
  .use(HttpApi)
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    preload: ['en-US', 'zh-CN', 'zh-MO'],
    backend: {
      allowMultiLoading: true,
      loadPath: '/locales/{{lng}}/{{ns}}.json', // path where resources get loaded from
    },
    fallbackLng: "en-US", // use en if detected lng is not available
    debug: true,
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;