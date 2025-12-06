import { useRef, useState, useEffect } from "react";
import { useTheme } from "../../providers/ThemeProvider";

//####################################################################################//
// Properties
//####################################################################################//
export type TitleProps = {
    text: string;
    center?: boolean;
};

//####################################################################################//
// Controller hook
//####################################################################################//
function useTitleController() {
    const titleElementRef = useRef<HTMLHeadingElement>(null);
    const [fontSize, setFontSize] = useState("32px");
    const theme = useTheme();

    const MIN_SIZE = 24;
    const MAX_SIZE = 48;
    const SCALE = 0.1;

    useEffect(() => {
        const currentElement = titleElementRef.current;
        if (!currentElement) return;

        const parent = currentElement.parentElement;
        if (!parent) return;

        const updateFontSize = () => {
            const parentWidth = parent.offsetWidth;
            const scaledWidth = parentWidth * SCALE;
            const size = Math.min(Math.max(scaledWidth, MIN_SIZE), MAX_SIZE);
            setFontSize(`${size}px`);
        };

        const observer = new ResizeObserver(updateFontSize);
        observer.observe(parent);

        updateFontSize();
        return () => observer.disconnect();
    }, []);

    return { titleElementRef, fontSize, theme };
}

//####################################################################################//
// View component
//####################################################################################//
function TitleView({
    text,
    center = true,
    titleElementRef,
    fontSize,
    theme,
}: TitleProps & {
    titleElementRef: React.RefObject<HTMLHeadingElement | null>;
    fontSize: string;
    theme: ReturnType<typeof useTheme>;
}) {
    return (
        <h1
            ref={titleElementRef}
            className={`font-bold ${center ? "text-center" : ""}`}
            style={{ fontSize, color: theme?.textcolors?.header }}
        >
            {text}
        </h1>
    );
}

//####################################################################################//
// Callable
//####################################################################################//
export default function Title(props: TitleProps) {
    const controller = useTitleController();
    return <TitleView {...props} {...controller} />;
}
