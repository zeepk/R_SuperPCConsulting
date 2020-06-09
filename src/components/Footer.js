import React, { Component } from 'react';
import './style/Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<ul className="footer-ul">
					<li className="footer-li">
						<p className="made-by">
							<span role="img" aria-label="laptop">
								💻
							</span>
							Version 2.0.1
						</p>
					</li>
					<li className="footer-li">
						Made by
						<a
							className="footer-link"
							href="https://twitter.com/matthughes2112"
						>
							{' '}
							Matt Hughes
						</a>
					</li>

					<li className="footer-li">
						<p className="made-by">
							<a
								className="footer-link"
								href="https://github.com/zeepk/R_SuperPCConsulting"
							>
								<span
									role="img"
									aria-label="cat"
									style={{ marginRight: '5px' }}
								>
									🐈
								</span>
								Github Source
							</a>
						</p>
					</li>
				</ul>
			</div>
		);
	}
}

export default Footer;
