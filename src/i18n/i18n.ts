import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTest from "@/i18n/locales/en/test.json";
import nlTest from "@/i18n/locales/nl/test.json";

export const DEFAULT_LANGUAGE = "en";

void i18n
    .use(initReactI18next)
    .init({
        lng: DEFAULT_LANGUAGE,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                test: enTest,
            },
            nl: {
                test: nlTest,
            },
        },
    });

export default i18n;
