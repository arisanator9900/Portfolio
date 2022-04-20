import React from 'react';
import './css/App.css'
import Landing from './views/Landing';
import Skills from './views/Skills';
import Contact from './views/Contact';
import Toggle from './views/Toggle'
import Git from './views/Git'
import Graphic from './views/Graphic'
import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './components/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Experience from './views/Experience';

const App = () => {

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div style={{
			backgroundColor: darkMode ? "#3a3b3c" : 'white',
			color: darkMode ? 'white' : '#000',}}>
      	<Toggle />
		<Landing />
		<Skills />
		<Git />
		<Graphic />
		<Contact />
		{/* <Experience /> */}
		</div>
	);
}

export default App;
