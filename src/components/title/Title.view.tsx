import type { TitleProps } from "./title";

export function TitleView({
    text,
    center = true,
    titleElementRef,
    fontSize,
    headerColor,
}: TitleProps & {
    titleElementRef: React.RefObject<HTMLHeadingElement | null>;
    fontSize: string;
    headerColor: string;
}) {
    return (
        <h1
            ref={titleElementRef}
            className={`font-bold ${center ? "text-center" : ""}`}
            style={{ fontSize: fontSize, color: headerColor }}
        >
            {text}
        </h1>
    );
}
