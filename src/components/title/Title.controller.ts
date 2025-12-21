import { useRef, useState, useEffect } from "react";
import { useTheme } from "../../providers/theme/ThemeContext";
import { useHeadingLevel } from "../../providers/headingLevel/HeadingLevelContext";
import type { HeadingTag } from "../../types/HeadingTag";

const BASE_SIZES: Record<number, number> = {
    1: 48,
    2: 40,
    3: 32,
    4: 28,
    5: 24,
    6: 20,
};

const FALLBACK_SIZE = 32;
const MIN_SIZE = 16;
const MAX_SCALE = 1.2;
const REFERENCE_WIDTH = 400; // reference parent width for base size

export function TitleController() {
    const titleElementRef = useRef<HTMLHeadingElement>(null);
    const [fontSize, setFontSize] = useState("32");

    const theme = useTheme();
    const level = useHeadingLevel();
    const Tag = `h${level.toString()}` as HeadingTag;

    useEffect(() => {
        const currentElement = titleElementRef.current;
        if (!currentElement) return;

        const parent = currentElement.parentElement;
        if (!parent) return;

        let frameId: number;

        const updateFontSize = () => {
            const parentWidth = parent.getBoundingClientRect().width * window.devicePixelRatio;
            const baseSize = BASE_SIZES[level] || FALLBACK_SIZE;

            const scale = Math.min(parentWidth / REFERENCE_WIDTH, MAX_SCALE);
            const scaledSize = baseSize * scale;
            const size = Math.max(scaledSize, MIN_SIZE);

            setFontSize(`${size}px`);
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
        Tag,
    };
}
