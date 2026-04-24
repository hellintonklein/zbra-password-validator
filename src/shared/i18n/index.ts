import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEn from './locales/en/common.json';
import commonPt from './locales/pt/common.json';
import passwordValidatorEn from '@/src/features/password-validator/ui/i18n/en/translations.json';
import passwordValidatorPt from '@/src/features/password-validator/ui/i18n/pt/translations.json';

const resources = {
  en: {
    common: commonEn.common,
    password_validator: passwordValidatorEn.password_validator,
  },
  pt: {
    common: commonPt.common,
    password_validator: passwordValidatorPt.password_validator,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    ns: ['common'],
    defaultNS: 'common',
  });

export default i18n;
