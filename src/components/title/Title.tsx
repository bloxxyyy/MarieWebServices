import { TitleController } from "./Title.controller";
import { TitleView } from "./Title.view";

export interface TitleProps {
    /** The text content of the title */
    text: string;

    /**
     * Whether the title should be centered horizontally.
     * @default true
     */
    center?: boolean;
};

/**
 * Title component displays a dynamic heading whose font size adjusts
 * based on the parent element’s width.
 *
 * @remarks
 * See {@link TitleProps} for detailed prop descriptions.
 *
 * @example
 * <Title text="Welcome" />
 * <Title text="Hello World" center={false} />
 */
export default function Title(props: TitleProps) {
    const controller = TitleController();
    return <TitleView {...props} {...controller} />;
}
