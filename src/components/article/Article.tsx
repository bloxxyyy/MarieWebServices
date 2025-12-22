import type { JSX, ReactNode } from "react";
import { ArticleController } from "@/components/article/Article.controller";
import { ArticleView } from "@/components/article/Article.view";
import { type HeadingLevelProvider } from "@/providers/headingLevel/HeadingLevelContext"; // needed for {@link}
import type Title from "@/components/title/Title"; // needed for {@link}

/**
 * Props for the {@link Article} component.
 */
export interface ArticleProps {
    /** The content of the arcticle */
    children: ReactNode;

    /**
     * Optional additional CSS classes for the article container
     */
    className?: string;
}

/**
 * Article component
 *
 * @description
 * Article component wraps content in a semantic `<article>` element and
 * automatically increments the heading level for nested children like {@link Title}.
 *
 * The component internally uses a {@link HeadingLevelProvider}, so any
 * headings (like {@link Title}) inside this article will automatically
 * render at the correct level relative to the parent heading level.
 *
 * @param {ArticleProps} props - Props for the Article component. See {@link ArticleProps}.
 * @returns {JSX.Element} JSX element representing the article layout.
 *
 * @example
 * <Article>
 *   <Title text="Welcome" />
 * </Article>
 *
 * <Article className="p-4 bg-gray-100">
 *   <Title text="Hello World" />
 * </Article>
 */
export default function Article(props: ArticleProps): JSX.Element {
    const controller = ArticleController();
    return <ArticleView {...props} {...controller} />;
}
