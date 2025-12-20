import { createContext, useContext } from "react";
import type Title from "../../components/title/Title";
import { HeadingLevelProvider } from "./HeadingLevelProvider";

/**
 * React context holding the current heading level.
 *
 * @remarks
 * Provides the numeric heading level (1–6) to nested components.
 * Used internally by {@link HeadingLevelProvider} and accessed via {@link useHeadingLevel}.
 *
 * @example
 * import { HeadingLevelContext, useContext } from './HeadingLevelContext';
 *
 * const currentLevel = useContext(HeadingLevelContext);
 * console.log(currentLevel); // 1 (default) or the value provided by a HeadingLevelProvider
 */
export const HeadingLevelContext = createContext(1);

/**
 * Hook to access the current heading level from context.
 *
 * @returns The current heading level (1–6).
 *
 * @remarks
 * Use this hook inside components like {@link Title} to determine which heading
 * tag (`h1`–`h6`) should be used based on the current section depth.
 *
 * @example
 * const level = useHeadingLevel();
 * const Tag = `h${level}` as const;
 * return <Tag>Dynamic Heading</Tag>;
 */
export function useHeadingLevel() {
    return useContext(HeadingLevelContext);
}
export { HeadingLevelProvider };

