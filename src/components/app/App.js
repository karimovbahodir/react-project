
import { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Info from "../info/Info";
import List from "../list/List";
import Random from "../random/Random";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";


const App = () => {
	const [selectedChar, setSelectedChar] = useState(null);

	const onCharSelected = (id) => {
		setSelectedChar(id);
	}


	return (
		<div className="app">
			<Header />
			<main>
				<ErrorBoundary>
					<Random />
				</ErrorBoundary>
				<div className="app__content">
					<ErrorBoundary>
						<List onCharSelected={onCharSelected} />
					</ErrorBoundary>
					<ErrorBoundary>
						<Info charId={selectedChar} />
					</ErrorBoundary>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;

