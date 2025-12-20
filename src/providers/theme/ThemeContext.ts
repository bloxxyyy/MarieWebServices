import { createContext, useContext } from "react";
import type { Theme } from "../../types/Theme";
import { type ThemeProvider } from "./ThemeProvider";

/**
 * React context holding the current theme object.
 *
 * @remarks
 * Used internally by {@link ThemeProvider} and accessed via {@link useTheme}.
 */
export const ThemeContext = createContext<Theme | undefined>(undefined);

/**
 * Hook to access the current theme object from context.
 *
 * @returns The current {@link Theme} object.
 *
 * @throws If no {@link ThemeContext} has been provided in the component tree.
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
