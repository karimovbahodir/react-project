
import { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Info from "../info/Info";
import List from "../list/List";
import Random from "../random/Random";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import { ModalProvider } from "../context";



const App = () => {
	const [selectedChar, setSelectedChar] = useState(null);
	


	return (
		<ModalProvider>
			<div className="app">
				<Header />
				<main>
					<ErrorBoundary>
						<Random />
					</ErrorBoundary>
					<div className="app__content">
						<ErrorBoundary>
							<List onCharSelected={(id) => setSelectedChar(id)} />
						</ErrorBoundary>
						<ErrorBoundary>
							<Info charId={selectedChar} />
						</ErrorBoundary>
					</div>
				</main>
				<Footer />
			</div>
		</ModalProvider>
	);
}

export default App;

