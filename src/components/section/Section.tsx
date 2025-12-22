import type { JSX, ReactNode } from "react";
import { SectionController } from "@/components/section/Section.controller";
import { SectionView } from "@/components/section/Section.view";
import { type HeadingLevelProvider } from "@/providers/headingLevel/HeadingLevelContext"; // needed for {@link}
import type Title from "@/components/title/Title"; // needed for {@link}

/**
 * Props for the {@link Section} component.
 */
export interface SectionProps {
    /** The content of the section */
    children: ReactNode;

    /**
     * Optional additional CSS classes for the section container
     */
    className?: string;
}

/**
 * Section component
 *
 * @description
 * Section component wraps content in a semantic `<section>` element and
 * automatically increments the heading level for nested children like {@link Title}.
 *
 * The component internally uses a {@link HeadingLevelProvider}, so any
 * headings (like {@link Title}) inside this article will automatically
 * render at the correct level relative to the parent heading level.
 *
 * @param {SectionProps} props - Props for the Section component. See {@link SectionProps}.
 * @returns {JSX.Element} JSX element representing the section layout.
 *
 * @example
 * <Section>
 *   <Title text="Welcome" />
 * </Section>
 *
 * <Section className="p-4 bg-gray-100">
 *   <Title text="Hello World" />
 * </Section>
 */
export default function Section(props: SectionProps): JSX.Element {
    const controller = SectionController();
    return <SectionView {...props} {...controller} />;
}
