import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

import HeaderSection from './components/HeaderSection.js';
import HowWeWork from './components/HowWeWork.js';
import Portfolio from './components/Portfolio.js';
import TestimonialsSection from './components/Testimonials.js';
import Team from './components/Team.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

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

        <ScrollableAnchor id={'test'}>
    			<div> 
    				<TestimonialsSection />				
    			</div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'team'}>
    			<div> 
    				<Team />
    			</div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'contact'}>
    			<div> 
    				<Contact />
    			</div>
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default App;
