import { createContext, useContext, type Context } from "react";
import type { Theme } from "@/types/Theme";
import { type ThemeProvider } from "@/providers/theme/ThemeProvider";

/**
 * React context holding the current theme object.
 *
 * @description
 * Used internally by {@link ThemeProvider} and accessed via {@link useTheme}.
 */
export const ThemeContext : Context<Theme | undefined> = createContext<Theme | undefined>(undefined);

/**
 * Hook to access the current theme object from context.
 *
 * @description
 * Must be used within a {@link ThemeProvider}. Throws an error if no theme
 * context is available in the component tree.
 *
 * @returns {Theme} The current theme object.
 * @see {@link Theme} for the structure of the theme object.
 * @throws {Error} If no {@link ThemeContext} has been provided.
 *
 * @example
 * const theme = useTheme();
 * console.log(theme.textcolors.header);
 */
export function useTheme(): Theme {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("No theme context has been found!");
    return context;
}
