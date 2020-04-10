import React from 'react';
import CustomRouter from './components/CustomRouter';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Card } from 'primereact/card';

import {
	faHome,
	faCloudUploadAlt,
	faBriefcase,
	faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
	return (
		<div className="App">
			<CustomRouter />
		</div>
	);
}

export default App;
