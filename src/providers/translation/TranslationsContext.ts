import { useTranslation as useI18nTranslation } from "react-i18next";

/**
 * Hook to access translations for a given namespace.
 *
 * @description
 * Wraps {@link useI18nTranslation} and returns the `t` translation function
 * scoped to the provided namespace.
 *
 * @param {string} namespace - Translation namespace (e.g. `"homepage"`).
 * @returns {(key: string) => string} Translation function for the namespace.
 */
export function useTranslation(namespace: string): (key: string) => string {
    const { t } = useI18nTranslation(namespace);
    return t;
}
