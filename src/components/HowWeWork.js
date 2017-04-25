import React from 'react';
import img from '../images/hhw_01.png';
import ProcessImage from './HowWeWork/ProcessImage.js';

const HowWeWork = () => (
	<section className="hww-container">
		<div className="hww-container-caption">
			<div className="hww-caption">
				<h1 className="hww-title"> How we work </h1>
				<div className="hww-divider"></div>
				<p className="hww-subtitle"> Take an in-depth look at the things we do </p>
				<p className="hww-subtitle"> and how we do them. </p>
			</div>
		</div>
	 	<ProcessImage />
	</section>
);


export default HowWeWork;