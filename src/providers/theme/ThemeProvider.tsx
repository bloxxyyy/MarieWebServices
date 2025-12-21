import type { JSX, ReactNode } from "react";
import { ThemeContext } from "@/providers/theme/ThemeContext";
import type { Theme } from "@/types/Theme";
import type { useTheme } from "@/providers/theme/ThemeContext";

/**
 * Props for {@link ThemeProvider}.
 */
export interface ThemeProviderProps {
    /** The React component subtree that will receive the theme. */
    children: ReactNode;

    /**
     * The theme object containing colors, font sizes, and other styling values.
     * See {@link Theme} for the full structure.
     */
    theme: Theme;
}

/**
 * Provides a theme object to the React component tree via context.
 *
 * @description
 * Wraps its children with a {@link ThemeContext.Provider} and exposes the supplied
 * {@link Theme} to descendant components through the {@link useTheme} hook.
 *
 * @param {ThemeProviderProps} props - Provider configuration..
 * @returns {JSX.Element} The provider wrapping the component subtree.
 * @see {@link ThemeProviderProps} for detailed prop descriptions.
 *
 * @example
 * const theme: Theme = {
 *   textcolors: {
 *     header: "#ffffff",
 *     paragraph: "#cccccc",
 *   },
 * };
 *
 * <ThemeProvider theme={theme}>
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider = ({ children, theme }: ThemeProviderProps): JSX.Element => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};
