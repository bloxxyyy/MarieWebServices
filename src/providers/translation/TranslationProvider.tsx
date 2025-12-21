import type { JSX, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n/i18n";

/**
 * Props for {@link TranslationProvider}.
 */
export interface TranslationProviderProps {
    /** The React component subtree that will receive translation context. */
    children: ReactNode;
}

/**
 * Provides translation resources and locale state to the component tree.
 *
 * @description
 * Wraps the application with {@link I18nextProvider} and exposes the configured
 * {@link i18n} instance to descendant components.
 *
 * @param {TranslationProviderProps} props - Provider configuration.
 * @returns {JSX.Element} The provider wrapping the component subtree.
 */
export const TranslationProvider = ({ children }: TranslationProviderProps): JSX.Element => {
    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
};
