import { useTranslation as useI18nTranslation } from "react-i18next";

/**
 * Hook to access translations for a given namespace.
 *
 * @param namespace - Translation namespace (e.g. "homepage")
 */
export function useTranslation(namespace: string) {
    const { t } = useI18nTranslation(namespace);
    return t;
}
