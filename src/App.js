import React from 'react';
import CustomRouter from './components/CustomRouter';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
	return (
		<div className="App">
			<CustomRouter />
		</div>
	);
}

export default App;
