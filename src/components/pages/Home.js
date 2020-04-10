import React, { Component } from 'react';
import '../style/Home.css';
import { Panel } from 'primereact/panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBriefcase,
	faHome,
	faCloudUploadAlt,
	faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
export default class Home extends Component {
	render() {
		return (
			<div>
				<img
					className="laptop-table-image"
					src={require('../../images/computer_table.jpg')}
					alt="Laptop"
				/>
				<div className="p-grid">
					<div className="p-col-12 p-md-6 p-lg-3">
						<Panel header="Business">
							<FontAwesomeIcon
								className="icon"
								icon={faBriefcase}
								size={'8x'}
							/>
							<p>
								As a small business, you may not need a lot of IT support. But
								when you do, you need it NOW. Get ahead of the game with a
								managed service contract with 24/hr support.
							</p>
						</Panel>
					</div>
					<div className="p-col-12 p-md-6 p-lg-3">
						<Panel header="Residential">
							<FontAwesomeIcon className="icon" icon={faHome} size={'8x'} />
							<p>
								Is your computer running slowly or crashing? We offer complete
								home solutions, virus/spyware removal, data transfer,
								networking, training and buying assistance offered at a
								reasonable price.
							</p>
						</Panel>
					</div>
					<div className="p-col-12 p-md-6 p-lg-3">
						<Panel header="Cloud Service">
							<FontAwesomeIcon
								className="icon"
								icon={faCloudUploadAlt}
								size={'8x'}
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
					</div>
					<div className="p-col-12 p-md-6 p-lg-3">
						<Panel header="Data Recovery">
							<FontAwesomeIcon
								className="icon"
								icon={faUserCheck}
								size={'8x'}
							/>
							<p>
								Dead hard drive? All is not lost. We can help with full data
								recovery
							</p>
						</Panel>
					</div>
				</div>
			</div>
		);
	}
}
