import React from 'react';

import NavHeader from './header/NavHeader.js';
import VideoCaption from './header/VideoCaption.js';
import VideoPlayer from './header/VideoPlayer.js';

const HeaderSection = () => {
	return (
		<div className="headerSection-cover" >
		 	<NavHeader />
		 	<VideoCaption />
			<VideoPlayer />	         
		</div>
	);
}
export default HeaderSection;