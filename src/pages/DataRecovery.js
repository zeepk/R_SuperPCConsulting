import React from 'react';
import Header from '../components/Header';
export default function DataRecovery() {
	const titleStyle = {
		fonstSize: '20px',
		textAlign: 'center'
	};
	return (
		<div>
			<Header />
			<br />
			<div style={titleStyle}>
				<h1>Data Recovery Support</h1>
			</div>
		</div>
	);
}
