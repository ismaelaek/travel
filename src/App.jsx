import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store";
import Home from "./components/home";
import About from "./components/about";
import Tours from "./components/tours";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";
import TourItem from "./components/tourItem";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/tours" element={<Tours />} />
					<Route path="/tours/:id" element={<TourItem />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/*" element={<h1> Not found</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
