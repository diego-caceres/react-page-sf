import React from 'react';
import proyecto from '../images/proyecto.png';

import brand1 from '../images/brand01.png';
import brand2 from '../images/brand02.png';
import brand3 from '../images/brand03.png';

const Portfolio = () => (
	<section className="portfolio-container">
		<div className="portfolio-projects">
			<div className="portfolio-project-container p-content">
				<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
		     	<div className="p-overlay">
		     		<h4 className="portfolio-project-name"> Bimbo - App & Web </h4>
		     	</div>
			</div>
			
			<div className="portfolio-project-container p-content">
				<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
		     	<div className="p-overlay">
		     		<h4 className="portfolio-project-name"> Bimbo - App & Web </h4>
		     	</div>
			</div>
			<div className="portfolio-project-container p-content">
				<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
		     	<div className="p-overlay">
		     		<h4 className="portfolio-project-name"> Bimbo - App & Web </h4>
		     	</div>
			</div>
			<div id="portfolio-project-title" className="portfolio-project-container" style={{paddingLeft: '20px'}}>
				<h1 className="portfolio-our-work"> Our Work </h1>
				<p className="portfolio-our-work-sub">Take an in-depth look at the things</p>
				<p className="portfolio-our-work-sub">we do and how we do them</p>
			</div>
			<div className="portfolio-project-container p-content">
				<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
		     	<div className="p-overlay">
		     		<h4 className="portfolio-project-name"> Bimbo - App & Web </h4>
	     		</div>
			</div>
			<div className="portfolio-project-container p-content">
				<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
		     	<div className="p-overlay">
		     		<h4 className="portfolio-project-name"> Bimbo - App & Web </h4>
		     	</div>
			</div>
		</div>
		<div className="clear"> </div>
		<div className="portfolio-client-cont">
			<h2 className="portfolio-client-cont-title"> Other clients we're very proud of</h2>
			<div className="portfolio-row-cont">
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-logo-img" 
		     		alt="How we work" src={brand1} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-logo-img" 
		     		alt="How we work" src={brand2} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-logo-img" 
		     		alt="How we work" src={brand3} draggable="false" />
				</div>
			</div>

			<div className="portfolio-row-cont">
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-logo-img" 
		     		alt="How we work" src={brand2} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-logo-img" 
		     		alt="How we work" src={brand2} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-logo-img" 
		     		alt="How we work" src={brand1} draggable="false" />
				</div>
			</div>

			<div className="portfolio-row-cont"> 
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-logo-img" 
		     		alt="How we work" src={brand1} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-logo-img" 
		     		alt="How we work" src={brand3} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-logo-img" 
		     		alt="How we work" src={brand2} draggable="false" />
				</div>
			</div>
		</div>
	</section>
);

export default Portfolio;