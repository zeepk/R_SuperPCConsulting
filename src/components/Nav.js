import React, { Component } from 'react';
// import style.css stylesheet
import './NavStyle.css';
class Nav extends Component {
	render() {
		const divStyle = {
			textAlign: 'center',
			backgroundColor: '#333'
		};
		return (
			<div class="nav" style={divStyle}>
				<ul>
					<li>
						<a class="active" href="#home">
							Home
						</a>
					</li>
					<li>
						<a href="#news">News</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Nav;
