import React, { Component } from 'react'
import '../style/Home.css'
import { Panel } from 'primereact/panel'
import { Messages } from 'primereact/messages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBriefcase,
	faHome,
	faCloudUploadAlt,
	faUserCheck,
} from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade'
import ServiceList from './ServiceList'

export default class Home extends Component {
	componentDidMount() {
		this.messages.show({
			severity: 'warn',
			summary: 'COVID-19 Update:',
			detail:
				'We hope you are staying safe and healthy. Most of our services can still be provided just as effectively over the phone! Give us a call at 000-867-5309',
			sticky: true,
		})
	}
	render() {
		return (
			<div>
				<Messages
					style={{}}
					className="alert-box"
					ref={(el) => (this.messages = el)}
				></Messages>
				<Fade>
					<img
						className="laptop-table-image"
						src={require('../../images/computer_table.jpg')}
						alt="Laptop"
					/>
				</Fade>
				<div className="p-grid p-nogutter welcome-grid">
					<div className="p-col-12 p-md-6 p-nogutter trouble-pic">
						<img
							className="laptop-trouble"
							src={require('../../images/laptop_png.png')}
							alt="Laptop"
						/>
					</div>
					<div className="p-col-12 p-md-6 p-nogutter welcome">
						<div className="welcome-text">
							<p className="tt">Technology Troubles?</p>
							<p className="dw">Don't worry, we've all been there.</p>
							<p className="su">
								Super PC Consulting is here to help you get on track! Check out
								all the services we offer below.
							</p>
						</div>
					</div>
				</div>
				<div className="p-grid service-types">
					<div className="p-col-12 p-md-6 p-lg-3">
						<a class="nav-link" href="/business">
							<Panel className="nav-panel">
								<FontAwesomeIcon
									className="icon"
									icon={faBriefcase}
									size={'6x'}
								/>
								<h4 style={{ color: 'black', fontWeight: '600' }}>Business</h4>
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
							<Panel className="nav-panel">
								<FontAwesomeIcon className="icon" icon={faHome} size={'6x'} />
								<h4 style={{ color: 'black', fontWeight: '600' }}>
									Residential
								</h4>

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
							<Panel className="nav-panel">
								<FontAwesomeIcon
									className="icon"
									icon={faCloudUploadAlt}
									size={'6x'}
								/>
								<h4 style={{ color: 'black', fontWeight: '600' }}>
									Cloud Service
								</h4>

								<p>
									Simplify your IT infrastructure! Save on IT costs and access
									your data anywhere, such as:
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
							<Panel className="nav-panel">
								<FontAwesomeIcon
									className="icon"
									icon={faUserCheck}
									size={'6x'}
								/>
								<h4 style={{ color: 'black', fontWeight: '600' }}>
									Data Recovery
								</h4>

								<p>
									Dead hard drive? <br />
									All is not lost! We can help with full data recovery. Give us
									a call and we'll see what we can do.
								</p>
							</Panel>
						</a>
					</div>
				</div>
				<div className="divider">
					<p className="divider-text">
						No matter the issue.. <br />
						we'll work with you to find an easy solution!
					</p>
				</div>
				<ServiceList />
			</div>
		)
	}
}
