import React from 'react';
import logo from '../../images/xSeedLogo.png';
import video1 from '../../videos/xseed720.webm';

const VideoPlayer = () => {
	return (
		<div id="video-home">
            <div className="overlay"></div>
           	
			<video className="video" loop autoPlay muted>
				<source src={video1} type='video/webm;codecs="vp8, vorbis"' />
			    <img src={logo} title="Your browser does not support the <video> tag" />
			</video>

            <div id="cover" className="cover" className="hiddenCover"></div>
        </div>	
	)
}
export default VideoPlayer;