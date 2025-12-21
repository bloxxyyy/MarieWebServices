import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/providers/theme/ThemeContext";
import { useHeadingLevel } from "@/providers/headingLevel/HeadingLevelContext";
import type { HeadingTag } from "@/types/HeadingTag";
import type { TitleControllerResult } from "@/components/title/Title";
import Title from "@/components/title/Title";

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

/**
 * Controller hook for a {@link Title} component.
 *
 * @description
 * Provides a ref for the heading element, a responsive font size based on
 * parent width, the theme's heading color, and the HTML heading tag
 * corresponding to the current heading level.
 *
 * @returns {TitleControllerResult} Object containing the heading ref, computed font size,
 * color from theme, and the heading tag.
 *
 * @see {@link TitleControllerResult}
 * @see {@link useHeadingLevel}
 * @see {@link useTheme}
 */
export function TitleController() : TitleControllerResult {
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
    }, [level]);

    return {
        titleElementRef,
        fontSize,
        headerColor: theme.textcolors.header,
        Tag,
    };
}
