import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

import HeaderSection from './components/HeaderSection.js';
import HowWeWork from './components/HowWeWork.js';
import Portfolio from './components/Portfolio.js';

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({offset: -40, scrollDuration: 800})

class App extends Component {
  render() {
    return (
      <div className="App">
      	<ScrollableAnchor id={'home'}>
      		<div>
        		<HeaderSection />
			</div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'hww'}>
        	<div>
        		<HowWeWork />
        	</div>
        </ScrollableAnchor>
                
        <ScrollableAnchor id={'portfolio'}>
			<div> 
				<Portfolio />
			</div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'team'}>
			<div> 
				
			</div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'contact'}>
			<div> 
				
			</div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
