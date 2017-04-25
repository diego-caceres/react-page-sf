import React, {Component} from 'react';
import Slider from 'react-slick';
//import ReactCSSTransitionGroup from 'react-addons-transition-group';
import ReactTimeout from 'react-timeout';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import img1 from '../../images/hhw_01.png';
import img2 from '../../images/hhw_02.png';
import img3 from '../../images/hhw_03.png';
import img4 from '../../images/hhw_04.png';
import img5 from '../../images/hhw_05.png';
import img6 from '../../images/hhw_06.png';
import imgInline1 from '../../images/incircle_01.png';
import imgInline2 from '../../images/incircle_02.png';
import imgInline3 from '../../images/incircle_03.png';
import imgInline4 from '../../images/incircle_04.png';
import imgInline5 from '../../images/incircle_05.png';
import imgInline6 from '../../images/incircle_06.png';

import arrowNext from '../../images/icon-next.png';
import arrowBefore from '../../images/icon-back.png';

let titles = ['Discovery','Design','Develop','QA','Deploy','Last'];
let texts = [
	`We work hand in hand with our clients through the creative process, identifying key inputs to ensure top-notch quality and a cutting edge solution for their business. All before writing a single line of code.`,
	`User Interface is at the core of everything we do. It’s one of the key differentiation aspects of any strong product, and we make a quick yet thorough emphasis in drawing up wireframes, designing the graphical elements and the branding assets.`,
	`A smooth development process is necessary to keep your project on time, as well as meeting the launch date. We regularly give progress reports as we manage the backend and frontend development of the product.`,
	`No project goes live until everything runs smoothly. Our QA team is involved with the development process form the very beginning, making testing and debugging the entire code a swift process, and quickly reporting back to the engeneering team for any fix to be made.`,
	`Launch is a critical time, and we take care every aspect, solving any road block strategically. When your project goes live and the user-base grows, we are standing by to provide any additional support your product might need. Making your business grow, is our business too.`,
	`The only missing step is where you come in. Got doubts, questions or an amazing project you want to shoot into the skies? We want to hear from you. `];

class ProcessImage extends Component {
  state = {
  	on: false,
		index: 1,
		items: [img1],
		inlineImg: imgInline1,
		title: titles[0],
		text: texts[0],
		//clicked: false
	} 
	toggleOn = () => {
    console.log('toggleOn called, value prev: ', this.state.on);
	 	this.setState({ on: !this.state.on })
	}
  nextStep = (e) => {
  	/*if(e) {
  		//Fue un click
  		this.setState({ clicked: true });
  	}*/
  	if(this.state.on)
  		return;
		let newIndex = this.state.index + 1;
		let currentItems = this.state.items;
		if(newIndex > 6) {
			//Reiniciar
			newIndex = 1;
			currentItems = [];
		}
		let newImg, newInline;
    	switch(newIndex) {
    		case 1:
    			newImg = img1;
    			newInline = imgInline1;
    			break;
			case 2:
    			newImg = img2;
    			newInline = imgInline2;
    			break;
			case 3:
    			newImg = img3;
    			newInline = imgInline3;
    			break;
    		case 4:
    			newImg = img4;
    			newInline = imgInline4;
    			break;
			case 5:
    			newImg = img5;
    			newInline = imgInline5;
    			break;
			case 6:
    			newImg = img6;
    			newInline = imgInline6;
    			break;
    	}
    	const newItems = currentItems.concat([
	      newImg
	    ]);	    
	    
	    this.setState({
        	index: newIndex,
        	items: newItems,
        	inlineImg: newInline,
        	title: titles[newIndex-1],
        	text: texts[newIndex-1],
        	on: true
        });
      this.props.setTimeout(this.toggleOn, 1550);
    }
    previousStep = (e) => {
    	/*if(e) {
    		//Fue un click
    		this.setState({ clicked: true });
    	}*/
    	if(this.state.on)
    		return;

  		let newIndex = this.state.index - 1;
  		let currentItems = this.state.items;
  		currentItems.pop()
  		
  		let newImg, newInline;
    	switch(newIndex) {
    		case 1:    			
    			newInline = imgInline1;
    			break;
			case 2:    			
    			newInline = imgInline2;
    			break;
			case 3:    			
    			newInline = imgInline3;
    			break;
    		case 4:
    			newInline = imgInline4;
    			break;
			case 5:
    			newInline = imgInline5;
    			break;
			case 6:
    			newInline = imgInline6;
    			break;
    	} 
	    this.setState({
      	index: newIndex,
      	items: currentItems,
      	inlineImg: newInline,
      	title: titles[newIndex-1],
      	text: texts[newIndex-1],
        on: true
      });
      this.props.setTimeout(this.toggleOn, 1550);
  }
  /*loopOnItsOwn = () => {
  	console.log('loop on its own called');
  	if(!this.state.clicked) {
  		this.nextStep();
  		this.props.setTimeout(this.loopOnItsOwn, 5000);
  	}
  }*/
  componentDidMount(){
  	//this.props.setTimeout(this.loopOnItsOwn, 5000);
  }
  render() {
      
	const items = this.state.items.map((item, i) => (
      <img className="hww-img" 
     		alt="How we work" src={item} onClick={this.nextStep} draggable="false" />
    ));

    const texts = this.state.items.map((item, i) => (
	    <img className="hww-img" 
     		alt="How we work" src={item} onClick={this.nextStep} draggable="false" />
    ));	 

    //let classNameBackArrow = this.state.index > 1 ? 'hww-arrow' : 'hww-arrow-hidden';

    return (
    	<div className="hww-bottom">
	    	<div className="hww-img-container">
	            <ReactCSSTransitionGroup transitionName="fadeimg">	            	
	            	{items}
	            </ReactCSSTransitionGroup>
	            <ReactCSSTransitionGroup transitionName="fadeimg">	            	
	            	<img className="hww-img-inline" key={this.state.index}
                  alt="How we work" src={this.state.inlineImg} onClick={this.nextStep} draggable="false" />
	            </ReactCSSTransitionGroup>
	     	</div>
	     	<div className="hww-text">
		     	<ReactCSSTransitionGroup transitionName="fadeimg">
		     		<div className="hww-text-inner" key={this.state.index}>
				    	<h1 className="hww-text-title">{this.state.title}</h1>
		     			<p className="hww-text-text">{this.state.text}</p>  			
		     		</div>
	     		</ReactCSSTransitionGroup>
	     		<div className="hww-arrow-container">
	     			<img className="hww-arrow" 
						      src={arrowBefore} 
				          draggable="false"
						      onClick={this.previousStep}/> 
	     			<img className="hww-arrow"
                  src={arrowNext} 
                  draggable="false" 
                  onClick={this.nextStep}/>
	     		</div>
	     		
	     	</div>
     	</div>
    );          
  }
};

export default ReactTimeout(ProcessImage);