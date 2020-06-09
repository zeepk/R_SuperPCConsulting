import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Business from './pages/Business';
import Residential from './pages/Residential';
import CloudService from './pages/CloudService';
import DataRecovery from './pages/DataRecovery';
import Header from './Header';
import Footer from './Footer';
export default class CustomRouter extends Component {
	render() {
		return (
			<div>
				<Header />
				<Router>
					<Route exact path="/" component={Home} />
					<Route exact path="/Business" component={Business} />
					<Route exact path="/Residential" component={Residential} />
					<Route exact path="/CloudService" component={CloudService} />
					<Route exact path="/DataRecovery" component={DataRecovery} />
				</Router>
				<Footer />
			</div>
		);
	}
}
