import type { JSX } from "react";
import type { TitleControllerResult, TitleProps } from "@/components/title/Title";
import type Title from "@/components/title/Title";

interface TitleViewProps extends TitleProps, TitleControllerResult {}

/**
 * Internal view component
 *
 * @description
 * Used by {@link Title} to renders a heading element with dynamic heading level
 *
 * @param {TitleViewProps} props - Props for the component.
 * @returns {JSX.Element} The rendered heading element.
 * @see {@link TitleViewProps} for detailed prop descriptions.
 */
export function TitleView(props: TitleViewProps) : JSX.Element {

    const { text, center = true, titleElementRef, fontSize, headerColor, Tag } = props;

    return (
        <Tag
            ref={titleElementRef}
            className={`font-bold ${center ? "text-center" : ""}`}
            style={{ fontSize: fontSize, color: headerColor }}
        >
            {text}
        </Tag>
    );
}
