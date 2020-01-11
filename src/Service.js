import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var innerStyle = {
	padding: '3vh 0',
	fontSize: '1.8vh'
};

export default function Service(props) {
	var circleStyle = {
		padding: 30,
		margin: 0,
		display: 'inline-block',
		backgroundColor: '#7fcbeb',
		borderRadius: '50%',
		width: '25vh',
		height: '25vh'
	};
	var textBoxStyle = {};
	return (
		<div>
			<div style={circleStyle}>
				<div style={innerStyle}>
					<FontAwesomeIcon icon={props.iconName} size={'4x'} />
					<br />
					<br />
					<h2>{props.serviceName}</h2>
				</div>
			</div>
		</div>
	);
}
