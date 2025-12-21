import type Title from "@/components/title/Title"; // needed for {@link}

/**
 * Valid HTML heading tag names.
 *
 * Used by components like {@link Title} to dynamically select
 * the correct semantic heading element.
 */
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
