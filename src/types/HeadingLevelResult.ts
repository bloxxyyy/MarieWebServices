import type { ArticleController } from "@/components/article/Article.controller"; // needed for {@link}
import type { SectionController } from "@/components/section/Section.controller"; // needed for {@link}

/**
 * Result object representing the next heading level.
 *
 * Used by controller hooks (e.g. {@link ArticleController}, {@link SectionController})
 * to pass the computed heading level to view components.
 */
export interface HeadingLevelResult {
    /** The next heading level (1–6) */
    nextLevel: number;
}
