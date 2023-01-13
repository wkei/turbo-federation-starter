import { createInstance, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector"


export const createI18n = (resources: Resource) => {
  const i18n = createInstance({
    fallbackLng: 'en',
    detection: {
      order: ["navigator"]
    },
    resources
  });

  i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init();

  return i18n
}

export * from 'i18next'
export * from 'react-i18next'
