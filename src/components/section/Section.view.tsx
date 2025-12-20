import { HeadingLevelProvider } from "../../providers/headingLevel/HeadingLevelContext";
import type { SectionProps } from "./Section";

export function SectionView({
    children,
    className,
    nextLevel,
}: SectionProps & {
    nextLevel: number
}) {
    return (
        <HeadingLevelProvider level={nextLevel}>
            <section className={className}>{children}</section>
        </HeadingLevelProvider>
    );
}
