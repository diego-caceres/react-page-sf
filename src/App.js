import React, { Component } from 'react';
import './App.css';
import './TeamPage.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HeaderSection from './components/HeaderSection.js';
import HowWeWork from './components/HowWeWork.js';
import Portfolio from './components/Portfolio.js';
import TestimonialsSection from './components/Testimonials.js';
import Team from './components/Team.js';
import Contact from './components/Contact.js';


import TeamPage from './components/TeamPage.js';

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({offset: -0, scrollDuration: 800})

class App extends Component {
  render() {
    return (
        <Router> 
            <div>                
                <Route exact={true} path="/"  component={HomeApp} />
                <Route path="/team" component={TeamPage} /> 
            </div>
        </Router>
    );
  }
}

const HomeApp = () => (
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
        
    </div>
)

export default App;
