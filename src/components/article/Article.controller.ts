import { useHeadingLevel } from "@/providers/headingLevel/HeadingLevelContext";
import type { HeadingLevelResult } from "@/types/HeadingLevelResult";

/**
 * Article component controller.
 *
 * @description
 * Computes the next heading level for an article based on the current context.
 *
 * @returns {HeadingLevelResult} An object containing the next heading level.
 * @see {@link HeadingLevelResult}
 */
export function ArticleController() : HeadingLevelResult {
    const parentLevel = useHeadingLevel();
    const nextLevel = Math.min(parentLevel + 1, 6);

    return { nextLevel };
}
