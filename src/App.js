import {
	Blog,
	Features,
	Header,
	Footer,
	Possibility,
	WhatGpt3,
} from './Containers';

import { CTA, Navbar, Brand } from './Components';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGpt3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
}

export default App;
