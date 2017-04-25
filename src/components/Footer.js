import React from 'react';

import facebook from '../images/social-facebook.png';
import twitter from '../images/social-twitter.png';
import instagram from '../images/social-instagram.png';

const Footer = (props) => {
	const year = new Date().getFullYear();
	return ( 
		<div className="footer">
			<div className="footer-xseed">
				<p> © {year} XseedIT Solutions </p>
			</div>
			<div className="footer-medias">
				
				<a href="https://www.facebook.com/xseeditsolutions/" target="_blank" >
					<img className="f-icon-img" alt="facebook" src={facebook} draggable="false" /> 
				</a>
                
                <a href="https://www.instagram.com/xseedsf/" target="_blank" >
					<img className="f-icon-img" alt="instagram" src={instagram} draggable="false" /> 
				</a>

				<a href="https://twitter.com/XseedSF/" target="_blank" >
					<img className="f-icon-img" alt="twitter" src={twitter} draggable="false" /> 
				</a>
			</div>
		</div>
	)
}

export default Footer