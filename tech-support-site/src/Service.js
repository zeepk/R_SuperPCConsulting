import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';

var innerStyle = {
	padding: '3vh 0',
	fontSize: '1vw'
};

export default function Service(props) {
	var circleStyle = {
		padding: 10,
		margin: 20,
		display: 'inline-block',
		backgroundColor: props.circleColor,
		borderRadius: '50%',
		width: '15vw',
		height: '15vw'
	};
	return (
		<Spring
			from={{ opacity: 0, marginTop: -500 }}
			to={{ opacity: 1, marginTop: 0 }}
		>
			{props2 => (
				<div style={props2}>
					<div style={circleStyle}>
						<div style={innerStyle}>
							<FontAwesomeIcon icon={props.iconName} size={'7x'} />
							<br />
							<br />
							<h2>{props.serviceName}</h2>
						</div>
					</div>
				</div>
			)}
		</Spring>
	);
}
