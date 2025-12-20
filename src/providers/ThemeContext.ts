import { createContext, useContext } from "react";
import type { Theme } from "../types/Theme";

export const ThemeContext = createContext<Theme | undefined>(undefined);

export function useTheme(): Theme {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("No theme context has been found!");
    return context;
}
