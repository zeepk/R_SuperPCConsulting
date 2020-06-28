import React, { Component } from 'react'
import { Panel } from 'primereact/panel'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import Fade from 'react-reveal/Fade'

import '../style/ServiceList.css'

export default class ServiceList extends Component {
	constructor(props) {
		super(props)
		this.state = { opened: true }
	}
	toggle_open = () => {
		this.setState({
			opened: !this.state.opened,
		})
	}
	render() {
		return (
			<div className="service-list">
				{/* <Button
					label={this.state.opened ? 'Show Services' : 'Hide Services'}
					onClick={this.toggle_open}
					className="open-button p-button-raised p-button-rounded"
				/>
				<Panel
					className="services-collapseable"
					header="Services"
					toggleable={true}
					collapsed={this.state.opened}
					onToggle={(e) => this.setState({ opened: e.value })}
				> */}
				<Fade>
					<div className="imgContainer" onClick={this.toggle_open}>
						<div className="tag">Services</div>
						<img
							className="white-desk-image"
							src={require('../../images/white_desk.jpg')}
							alt="Laptop"
						/>
					</div>
				</Fade>
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
						<Card className="service-item" title="Laptop screen repair"></Card>
					</div>
					<div className="p-col-12 p-md-6">
						<Card className="service-item" title="Iphone/ipad repair"></Card>
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
				{/* </Panel> */}
			</div>
		)
	}
}
