import { createContext, type ReactNode, useContext } from "react";

//####################################################################################//
// Theme type
//####################################################################################//
export type Theme = {
    textcolors: {
        header: string;
        paragraph: string;
    };
};

//####################################################################################//
// Context
//####################################################################################//
const ThemeContext = createContext<Theme | undefined>(undefined);

//####################################################################################//
// Provider
//####################################################################################//
type ThemeProviderProps = {
    children: ReactNode;
    theme: Theme;
};

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

//####################################################################################//
// Callable
//####################################################################################//
export function useTheme(): Theme {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("no theme context has been found!");
    }

    return context;
}
