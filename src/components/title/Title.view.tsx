import type { HeadingTag } from "../../types/HeadingTag";
import type { TitleProps } from "./Title";

export function TitleView({
    text,
    center = true,
    titleElementRef,
    fontSize,
    headerColor,
    Tag
}: TitleProps & {
    titleElementRef: React.RefObject<HTMLHeadingElement | null>;
    fontSize: string;
    headerColor: string;
    Tag: HeadingTag
}) {
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
