import React from 'react';
import Header from '../components/Header';
export default function Residential() {
	const titleStyle = {
		fonstSize: '20px',
		textAlign: 'center'
	};
	return (
		<div>
			<Header />
			<br />
			<div style={titleStyle}>
				<h1>Residential Services</h1>
			</div>
		</div>
	);
}
