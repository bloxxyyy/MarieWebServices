import type { JSX } from "react";
import { HeadingLevelProvider } from "@/providers/headingLevel/HeadingLevelContext";
import type { SectionProps } from "@/components/section/Section";
import type { HeadingLevelResult } from "@/types/HeadingLevelResult";
import type Section from "@/components/section/Section";

export interface SectionViewProps extends SectionProps, HeadingLevelResult {}

/**
 * Internal view component used by {@link Section}.
 *
 * @description
 * Wraps content in {@link HeadingLevelProvider} to automatically increment heading levels.
 *
 * @param {SectionViewProps} props - Props for the component..
 * @returns {JSX.Element} The section element wrapped in a heading level provider.
 * @see {@link SectionViewProps} for detailed prop descriptions.
 */
export function SectionView(props : SectionViewProps) : JSX.Element {

    const { children, className, nextLevel } : SectionViewProps = props;

    return (
        <HeadingLevelProvider level={nextLevel}>
            <section className={className}>{children}</section>
        </HeadingLevelProvider>
    );
}
