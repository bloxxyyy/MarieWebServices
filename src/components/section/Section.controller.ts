import { useHeadingLevel } from "../../providers/headingLevel/HeadingLevelContext";

export function SectionController() {
    const parentLevel = useHeadingLevel();
    const nextLevel = Math.min(parentLevel + 1, 6);

    return { nextLevel };
}
