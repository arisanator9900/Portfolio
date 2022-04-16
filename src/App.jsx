import React from 'react';
import './css/App.css'
import About from './views/About';
import Landing from './views/Landing';
import Skills from './views/Skills';
import Experience from './views/Experience';
import Contact from './views/Contact';
import Toggle from './views/Toggle'

const App = () => {
	return (
		<>
      	{/* <Toggle /> */}
		<Landing />
		{/* delete this when adding back<About />
		<Skills />
		<Experience />
		<Contact /> */}
		</>
	);
}

export default App;
