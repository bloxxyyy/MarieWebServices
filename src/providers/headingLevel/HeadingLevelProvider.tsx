import type { JSX, ReactNode } from "react";
import { HeadingLevelContext, useHeadingLevel } from "@/providers/headingLevel/HeadingLevelContext";
import Title from "@/components/title/Title";

/**
 * Props for {@link HeadingLevelProvider}.
 */
export interface HeadingLevelProviderProps {
    /** The React component subtree that will receive the heading level. */
    children: ReactNode;

    /**
     * The starting heading level for nested headings.
     * Values should be between 1 (initial) and 6.
     * @default 1
     */
    level: number;
}

/**
 * Provides a heading level context to the React component tree.
 *
 * @description
 * Wraps its children with a {@link HeadingLevelContext.Provider} and makes
 * the current heading level available to nested components via
 * {@link useHeadingLevel}.
 *
 * Components like {@link Title} can use {@link useHeadingLevel} to automatically
 * determine which HTML heading tag (`h1`–`h6`) to render. Wrapping content in
 * multiple {@link HeadingLevelProvider} components allows you to increment
 * heading levels in a nested manner.
 *
 * @param {HeadingLevelProviderProps} props - Provider configuration.
 * @returns {JSX.Element} The provider wrapping the children.
 * @see {@link HeadingLevelProviderProps} for detailed prop descriptions.
 */
export const HeadingLevelProvider = ({ children, level }: HeadingLevelProviderProps) : JSX.Element => {
    return (
        <HeadingLevelContext.Provider value={level}>
            {children}
        </HeadingLevelContext.Provider>
    );
};
