import type { ReactNode } from "react";
import { SectionController } from "./Section.controller";
import { SectionView } from "./Section.view";
import { type HeadingLevelProvider } from "../../providers/headingLevel/HeadingLevelContext"; // needed for {@link}
import type Title from "../title/Title"; // needed for {@link}

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
 * Section component wraps content in a semantic `<section>` element and
 * automatically increments the heading level for nested titles.
 *
 * @remarks
 * The component uses a {@link HeadingLevelProvider} internally, so any
 * {@link Title} or other heading inside this section will increment its level
 * relative to the parent section.
 *
 * See {@link SectionProps} for detailed prop descriptions.
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
export default function Section(props: SectionProps) {
    const controller = SectionController();
    return <SectionView {...props} {...controller} />;
}
