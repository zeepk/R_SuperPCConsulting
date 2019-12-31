import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Offering() {
	const c1style = {
		fontSize: '1.5vw'
	};

	return (
		<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
			{props => (
				<div style={props}>
					<div className="Offering">
						<p>
							<b>What We Can Help You With:</b>
						</p>
						<p>Virus Removal, Data Recovery</p>
						<p>Residential and Home Repair</p>
						<p>Startup Problems</p>
						<p>Automatic Backup Solutions</p>
						<p>Laptop/iPhone/iPad Screen Repair</p>
						<p>Network Installation and Setup</p>
						<p>Onsite Training</p>
						<p>Managed Service Contract</p>
					</div>
				</div>
			)}
		</Spring>
	);
}
