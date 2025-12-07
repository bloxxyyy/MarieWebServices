import { createContext, type ReactNode, useContext } from "react";

//####################################################################################//
// Theme Props
//####################################################################################//
export type Theme = {
    textcolors: {
        header: string;
        paragraph: string;
    };
};

type ThemeProviderProps = {
    children: ReactNode;
    theme: Theme;
};

//####################################################################################//
// Context
//####################################################################################//
const ThemeContext = createContext<Theme | undefined>(undefined);

export function useTheme(): Theme {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("no theme context has been found!");
    }

    return context;
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
