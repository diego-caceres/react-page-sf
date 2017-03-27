import React from 'react';
import proyecto from '../images/proyecto.png';

import brand1 from '../images/brand01.png';
import brand2 from '../images/brand02.png';
import brand3 from '../images/brand03.png';

const Portfolio = () => (
	<section className="portfolio-container">
		<div>
			<div>
				<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
			</div>
			<div>
				<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
			</div>
			<div>
				<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
			</div>
			<div>
				<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
			</div>
		</div>
		<div className="clear"> </div>
		<div className="portfolio-client-cont">
			<h2> Our clients we're very proud of</h2>
			<div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-img" 
		     		alt="How we work" src={brand1} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-img" 
		     		alt="How we work" src={brand2} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-img" 
		     		alt="How we work" src={brand3} draggable="false" />
				</div>
			</div>

			<div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-img" 
		     		alt="How we work" src={brand2} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-img" 
		     		alt="How we work" src={brand2} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-img" 
		     		alt="How we work" src={brand1} draggable="false" />
				</div>
			</div>

			<div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-img" 
		     		alt="How we work" src={brand1} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-img" 
		     		alt="How we work" src={brand3} draggable="false" />
				</div>
				<div className="portfolio-client-logo-cont">
					<img className="portfolio-img" 
		     		alt="How we work" src={brand2} draggable="false" />
				</div>
			</div>
		</div>
	</section>
);

export default Portfolio;