import type { ThemeProvider } from "@/providers/theme/ThemeProvider"; // needed for {@link}
import type { useTheme } from "@/providers/theme/ThemeContext"; // needed for {@link}

/**
 * Theme definition used throughout the application.
 *
 * Provided via {@link ThemeProvider} and accessed using {@link useTheme}.
 */
export interface Theme {
    /** Text color definitions */
    textcolors: {
        /** Color used for headings */
        header: string;
        /** Color used for paragraph text */
        paragraph: string;
    };
}
