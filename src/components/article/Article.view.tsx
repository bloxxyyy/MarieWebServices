import type { JSX } from "react";
import { HeadingLevelProvider } from "@/providers/headingLevel/HeadingLevelContext";
import type { ArticleProps } from "@/components/article/Article";
import type { HeadingLevelResult } from "@/types/HeadingLevelResult";
import type Article from "@/components/article/Article";

export interface ArticleViewProps extends ArticleProps, HeadingLevelResult {}

/**
 * Internal view component used by {@link Article}.
 *
 * @description
 * Wraps content in {@link HeadingLevelProvider} to automatically increment heading levels.
 *
 * @param {ArticleViewProps} props - Props for the component.
 * @returns {JSX.Element} The article element wrapped in a heading level provider.
 * @see {@link ArticleViewProps} for detailed prop descriptions.
 */
export function ArticleView(props : ArticleViewProps) : JSX.Element {

    const { children, className, nextLevel } = props;

    return (
        <HeadingLevelProvider level={nextLevel}>
            <article className={className}>{children}</article>
        </HeadingLevelProvider>
    );
}
