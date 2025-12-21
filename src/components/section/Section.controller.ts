import type { HeadingLevelResult } from "@/types/HeadingLevelResult";
import { useHeadingLevel } from "@/providers/headingLevel/HeadingLevelContext";

/**
 * Section component controller.
 *
 * @description
 * Computes the next heading level for an section based on the current context.
 *
 * @returns {HeadingLevelResult} An object containing the next heading level.
 * @see {@link HeadingLevelResult}
 */
export function SectionController() : HeadingLevelResult {
    const parentLevel = useHeadingLevel();
    const nextLevel = Math.min(parentLevel + 1, 6);

    return { nextLevel };
}
