import React, { Component } from 'react';
import '../style/Home.css';
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBriefcase,
	faHome,
	faCloudUploadAlt,
	faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
export default class Home extends Component {
	render() {
		return (
			<div>
				<Fade>
					<img
						className="laptop-table-image"
						src={require('../../images/computer_table.jpg')}
						alt="Laptop"
					/>
				</Fade>
				<div className="welcome">
					<p className="tt">Technology Troubles?</p>
					<p className="dw">Don't worry, we've all been there.</p>
					<p className="su">
						Super PC Consulting is here to help you get on track! Check out all
						the services we offer below.
					</p>
				</div>
				<div className="p-grid">
					<div className="p-col-12 p-md-6 p-lg-3">
						<a class="nav-link" href="/business">
							<Panel header="Business">
								<FontAwesomeIcon
									className="icon"
									icon={faBriefcase}
									size={'6x'}
								/>
								<p>
									As a small business, you may not need a lot of IT support. But
									when you do, you need it NOW. Get ahead of the game with a
									managed service contract with 24/hr support.
								</p>
							</Panel>
						</a>
					</div>
					<div className="p-col-12 p-md-6 p-lg-3">
						<a class="nav-link" href="/residential">
							<Panel header="Residential">
								<FontAwesomeIcon className="icon" icon={faHome} size={'6x'} />
								<p>
									Is your computer running slowly or crashing? We offer complete
									home solutions, virus/spyware removal, data transfer,
									networking, training and buying assistance offered at a
									reasonable price.
								</p>
							</Panel>
						</a>
					</div>
					<div className="p-col-12 p-md-6 p-lg-3">
						<a class="nav-link" href="/cloudservice">
							<Panel header="Cloud Service">
								<FontAwesomeIcon
									className="icon"
									icon={faCloudUploadAlt}
									size={'6x'}
								/>
								<p>
									Simplify your IT infrastructure! Save on IT cost, access your
									data anywhere, such as:
								</p>
								<ul>
									<li>iCloud</li>
									<li>Office365</li>
									<li>Google Apps</li>
								</ul>
							</Panel>
						</a>
					</div>
					<div className="p-col-12 p-md-6 p-lg-3">
						<a class="nav-link" href="/datarecovery">
							<Panel header="Data Recovery">
								<FontAwesomeIcon
									className="icon"
									icon={faUserCheck}
									size={'6x'}
								/>
								<p>
									Dead hard drive? All is not lost. We can help with full data
									recovery
								</p>
							</Panel>
						</a>
					</div>
				</div>
				<Fade>
					<div className="imgContainer">
						<div className="tag">Services</div>
						<img
							className="white-desk-image"
							src={require('../../images/white_desk.jpg')}
							alt="Laptop"
						/>
					</div>
				</Fade>
				<div className="service-list">
					<Flip left cascade>
						<div className="p-grid">
							<div className="p-col-12 p-md-6">
								<Card className="service-item" title="Virus Removal"></Card>
							</div>
							<div className="p-col-12 p-md-6">
								<Card className="service-item" title="Data Recovery"></Card>
							</div>
							<div className="p-col-12 p-md-6">
								<Card
									className="service-item"
									title="Residential and home repair"
								></Card>
							</div>
							<div className="p-col-12 p-md-6">
								<Card className="service-item" title="Startup problems"></Card>
							</div>
							<div className="p-col-12 p-md-6">
								<Card
									className="service-item"
									title="Automatic backup solutions"
								></Card>
							</div>
							<div className="p-col-12 p-md-6">
								<Card
									className="service-item"
									title="Laptop screen repair"
								></Card>
							</div>
							<div className="p-col-12 p-md-6">
								<Card
									className="service-item"
									title="Iphone/ipad repair"
								></Card>
							</div>
							<div className="p-col-12 p-md-6">
								<Card
									className="service-item"
									title="​Network Installation and Setup"
								></Card>
							</div>
							<div className="p-col-12 p-md-6">
								<Card className="service-item" title="Onsite Training"></Card>
							</div>
							<div className="p-col-12 p-md-6">
								<Card
									className="service-item"
									title="​Managed Service Contract"
								></Card>
							</div>
						</div>
					</Flip>
				</div>
			</div>
		);
	}
}
