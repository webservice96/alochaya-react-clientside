import { Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Pages/Contact';
import Cormi from './components/Pages/Cormi';
import Home from './components/Pages/Home';
import Montobbo from './components/Pages/Montobbo';
import Portfolio from './components/Pages/Portfolio';
import Sebasomuho from './components/Pages/Sebasomuho';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/cormi" element={<Cormi />} />
				<Route path="/montobbo" element={<Montobbo />} />
				<Route path="/sebasomuho" element={<Sebasomuho />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
