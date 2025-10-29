import Title from "./components/title/title";

export default function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 grid grid-rows-3 grid-cols-3">

			<div className="row-start-1 col-start-2 flex items-center justify-center">
				<Title text="Hello Tailwind" />
			</div>
		</div>
	);
}
