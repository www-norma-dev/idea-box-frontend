import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";


i18n

.use(detector)
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
