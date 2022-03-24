import Footer from "../footer/Footer";
import Header from "../header/Header";
import Info from "../info/Info";
import List from "../list/List";
import Random from "../random/Random";


function App() {
	return (
		<div className="app">
			<Header/>
			<main>
				<Random />
				<div className="app__content">
				<List/>
				<Info/>
				</div>
			</main>
			<Footer/>
		</div>
	);
}

export default App;
