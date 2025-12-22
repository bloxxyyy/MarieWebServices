import type { JSX, RefObject } from "react";
import { TitleController } from "@/components/title/Title.controller";
import { TitleView } from "@/components/title/Title.view";
import type { HeadingTag } from "@/types/HeadingTag";

export interface TitleProps {
    /** The text content of the title */
    text: string;

    /**
     * Whether the title should be centered horizontally.
     * @default true
     */
    center?: boolean;

    /**
     * Whether the title should contain a underline whenever possible.
     * @default true
     */
    shouldTryUnderline?: boolean;
};

/**
 * Result returned by {@link TitleController}.
 */
export interface TitleControllerResult {
    /** Ref to attach to the heading element */
    titleElementRef: RefObject<HTMLHeadingElement | null>;
    /** Calculated font size in pixels (as a string, e.g., "32px") */
    fontSize: string;
    /** Heading text color from theme */
    headerColor: string;
    /** The HTML heading tag corresponding to the current level (`h1`–`h6`) */
    Tag: HeadingTag;
    /** Whether the title should be rendered with underline */
    underline: boolean;
}

/**
 * Title component
 *
 * @description
 * Title component displays a dynamic heading whose font size adjusts
 * based on the parent element’s width.
 *
 * contains a underline when the heading level is 1 or 2, unless disabled.
 *
 * @param {TitleProps} props - Props for the Title component.
 * @returns {JSX.Element} The rendered title element.
 * @see {@link TitleProps} for detailed prop descriptions.
 *
 * @example
 * <Title text="Welcome" />
 * <Title text="Hello World" center={false} />
 * <Title text="Hello World" shouldTryUnderline={false} />
 */
export default function Title(props: TitleProps) : JSX.Element {
    const controller : TitleControllerResult = TitleController(props);
    return <TitleView {...props} {...controller} />;
}
