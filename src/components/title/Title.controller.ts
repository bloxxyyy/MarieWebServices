import { useRef, useState, useEffect } from "react";
import { useTheme } from "../../providers/ThemeContext";

const MIN_SIZE = 24;
const MAX_SIZE = 48;
const SCALE = 0.1;

export function TitleController() {
    const titleElementRef = useRef<HTMLHeadingElement>(null);
    const [fontSize, setFontSize] = useState("32");
    const theme = useTheme();

    useEffect(() => {
        const currentElement = titleElementRef.current;
        if (!currentElement) return;

        const parent = currentElement.parentElement;
        if (!parent) return;

        let frameId: number;

        const updateFontSize = () => {
            const parentWidth = parent.getBoundingClientRect().width;
            const scaledWidth = parentWidth * SCALE;
            const size = Math.min(Math.max(scaledWidth, MIN_SIZE), MAX_SIZE);
            setFontSize(`${size.toString()}px`);
        };

        // Throttled handler: ensures updateFontSize runs at most once per animation frame
        const handleResize = () => {
            if (frameId) cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(updateFontSize);
        };

        // Create a ResizeObserver that calls the throttled handler whenever parent size changes
        const observer = new ResizeObserver(handleResize);
        observer.observe(parent);

        // Initial sizing when component mounts
        handleResize();

        // Cleanup: disconnect observer and cancel any pending animation frame
        return () => {
            observer.disconnect();
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, []);

    return {
        titleElementRef,
        fontSize,
        headerColor: theme.textcolors.header,
    };
}
