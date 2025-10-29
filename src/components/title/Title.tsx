import { useRef, useState, useLayoutEffect } from 'react';
import { useTheme } from '../../providers/ThemeProvider';

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
	const containerRef = useRef<HTMLDivElement>(null);
	const [fontSize, setFontSize] = useState('2rem');

	useLayoutEffect(() => {
		if (!containerRef.current) return;

		const parent = containerRef.current.parentElement;
		if (!parent) return;

		const updateFontSize = () => {
			const width = parent.offsetWidth;
			const size = Math.min(Math.max(width * 0.1, 16), 48);
			setFontSize(`${size}px`);
		};

		const observer = new ResizeObserver(updateFontSize);
		observer.observe(parent);

		updateFontSize();
		return () => observer.disconnect();
	}, []);

	return { containerRef, fontSize };
}

//####################################################################################//
// View component
//####################################################################################//
function TitleView({
	text,
	center = true,
	containerRef,
	fontSize
}: TitleProps & { containerRef: React.RefObject<HTMLDivElement | null>; fontSize: string }) {

    const theme = useTheme();

	return (
		<div ref={containerRef} className={center ? 'text-center' : ''}>
			<h1 className="font-bold" style={{ fontSize, color: theme.textcolors.title }}>
				{text}
			</h1>
		</div>
	);
}

//####################################################################################//
// Callable
//####################################################################################//
export default function Title(props: TitleProps) {
	const controller = useTitleController();
	return <TitleView {...props} {...controller} />;
}
