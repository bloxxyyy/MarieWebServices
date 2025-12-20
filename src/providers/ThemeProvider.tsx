import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "../types/Theme";

export interface ThemeProviderProps {
    children: ReactNode;
    theme: Theme;
}

/**
 * Provides a theme object to the React component tree via context.
 *
 * This component wraps its children with a {@link ThemeContext.Provider}
 * and makes the supplied {@link Theme} available through the {@link useTheme} hook.
 *
 * @param props - Provider configuration.
 * @param props.children - The React component subtree that will receive the theme.
 * @param props.theme - The theme object containing styling values.
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
export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};
