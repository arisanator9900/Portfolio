import React from 'react';
import './css/App.css'
import Landing from './views/Landing';
import Skills from './views/Skills';
import Experience from './views/Experience';
import Contact from './views/Contact';
import Toggle from './views/Toggle'
import Git from './views/Git'
import Graphic from './views/Graphic'

const App = () => {
	return (
		<>
      	<Toggle />
		<Landing />
		<Skills />
		{/* delete this when adding back<About />
		<Git>
		<Graphic>
		<Experience />
		<Contact /> */}
		</>
	);
}

export default App;
