import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import detector from "i18next-browser-languagedetector";


i18n
.use(Backend)
.use(detector)
.use(initReactI18next)
.init({
    resources: {
        en: {
            translations: require('./locales/en/translation.json')
        },
        fr: {
            translations: require('./locales/fr/translation.json')
        }
    },
    // lng: 'fr',
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'fr'];

export default i18n;
