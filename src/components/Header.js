import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	const headerStyle = {
		fontSize: '30px',
		backgroundColor: 'black',
		color: '#fff'
	};
	const linkStyle = {
		color: '#fff',
		textDecoration: 'none'
	};
	return (
		<div style={headerStyle}>
			<br />
			<Link to="/" style={linkStyle}>
				<h1>Super PC Consulting</h1>
			</Link>

			<br />
		</div>
	);
}
