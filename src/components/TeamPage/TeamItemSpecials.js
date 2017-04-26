import React from 'react';
import { Link } from 'react-router-dom'

import facebook from '../../images/social-facebook.png';
import twitter from '../../images/social-twitter.png';
import instagram from '../../images/social-instagram.png';

export const TeamItemHiring = (props) => (
	<div className="flex-item flex-item-hiring">
    	<div className="team-item-container team-content team-item-hiring">
			<div className="team-text-hiring">
				We're always on the hunt for new talent!
			</div>
	     	<div className="">
	     		<Link className="team-work-with-us-a" to={'/#contact'}>	     		
                    <span className="team-work-with-us"> JOIN US! </span>                
                </Link>
	     	</div>
		</div>
    </div>
)

export const TeamItemSocialMedias = (props) => (
	<div className="flex-item flex-item-social">
    	<div className="team-item-container team-content team-item-hiring">
			<div className="team-text-social">
				Take the inside scoop!
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
    </div>
)

export const TeamItemContact = (props) => (
	<div className="flex-item flex-item-contact">
    	<div className="team-item-container team-content team-item-hiring">
			<div className="team-text-contact">
				Got any questions?
			</div>
	     	<div className="">
	     		<Link className="team-contact-a" to={'/#contact'}>	     		
                    <span className="team-contact"> CONTACT US! </span>                
                </Link>
	     	</div>
		</div>
    </div>
)
