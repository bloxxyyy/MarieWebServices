import type { ReactNode } from "react";
import { HeadingLevelContext, useHeadingLevel } from "./HeadingLevelContext";
import Title from "../../components/title/Title";

/**
 * Props for {@link HeadingLevelProvider}.
 */
export interface HeadingLevelProviderProps {
    /** The React component subtree that will receive the heading level. */
    children: ReactNode;

    /**
     * The starting heading level for nested headings.
     * Values should be between 1 and 6.
     * @default 1
     */
    level?: number;
}

/**
 * Provides a heading level context to the React component tree.
 *
 * This component wraps its children with a {@link HeadingLevelContext.Provider}
 * and makes the current heading level available to nested components via
 * {@link useHeadingLevel}.
 *
 * @param props - Provider configuration.
 * @param props.children - The React component subtree that will receive the level.
 * @param props.level - Starting heading level for the subtree.
 *
 * @remarks
 * Components like {@link Title} can use {@link useHeadingLevel} to automatically
 * determine which HTML heading tag (`h1`–`h6`) to render. Wrapping content in
 * multiple {@link HeadingLevelProvider} components allows you to increment
 * heading levels in a nested manner.
 */
export const HeadingLevelProvider = ({ children, level = 1 }: HeadingLevelProviderProps) => {
    return (
        <HeadingLevelContext.Provider value={level}>
            {children}
        </HeadingLevelContext.Provider>
    );
};
