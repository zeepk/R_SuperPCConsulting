import React from 'react';
// import Slide from 'react-reveal/Slide';
import './style/Header.css';
export default function Header() {
	return (
		// <Slide right>
		<div>
			<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
				<a
					class="navbar-brand"
					href="/"
					style={{ fontWeight: 'bold', fontSize: '3vh' }}
				>
					Super PC Consulting
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<a class="nav-link" href="/">
								Home <span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/business">
								Business
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/residential">
								Residential
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/cloudservice">
								Cloud Service
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/datarecovery">
								Data Recovery
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		// </Slide>
	);
}
