import React from 'react';
import { Link } from 'react-router-dom'


const Team = () => (
	<section className="team-container">
		<div className="team-caption-container">
			<div className="team-caption">                
                <p className="team-bigHeader">Our team</p>
                <p className="team-bigHeader">defines our culture</p>
                <p className="team-smallHeader">We believe in one two three many reasons why our</p>
                <p className="team-smallHeader">team is our most valuable asset.</p>
                <br/><br/>
                <div className="team-button-container"> 
                    <Link className="team-button-a" to={'/team#home'}>                        
                        <p className="team-button"> Meet Them </p>                
                    </Link>
                    <div className="clear t-hiddenClass" />
                    <p className="team-middle-button"> or </p>
                	<div className="clear t-hiddenClass" />
                    <a className="team-button-a" href="#contact" >
                        <p className="team-button"> Join us </p>
                    </a>
                </div>
            </div>
        </div>
	</section>
);

export default Team;