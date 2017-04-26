import React from 'react';

const TeamItem = (props) => (
    <div className="flex-item">

    	<div className="team-item-container team-content">
			<img className="team-img" 
	     		alt="How we work" src={props.image} draggable="false" />
	     	<div className="team-overlay">
	     		<div className="team-member-badge">
	     			<p className="team-member-name"> {props.name} </p>
	     			<p className="team-member-role"> {props.role} </p>
	     		</div>
	     	</div>
		</div>

    </div>
)

export default TeamItem;