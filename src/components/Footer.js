import React, { Component } from 'react'
import './style/Footer.css'

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="p-grid">
					<div className="p-col-12 p-md-6 p-lg-3"></div>
					<div className="p-col-12 p-md-6 p-lg-3">
						<ul className="footer-ul">
							<li className="footer-li">
								<a href="/">Legal Information</a>
							</li>
							<li className="footer-li">
								<a href="/">Copyright</a>
							</li>
							<li className="footer-li">
								<a href="/">References</a>
							</li>
						</ul>
					</div>
					<div className="p-col-12 p-md-6 p-lg-3">
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
							<li className="footer-li">
								Made by
								<a className="footer-link" href="https://matthughes.dev">
									{' '}
									Matt Hughes
								</a>
							</li>
						</ul>
					</div>
					<div className="p-col-12 p-md-6 p-lg-3"></div>
				</div>
			</div>
		)
	}
}

export default Footer
