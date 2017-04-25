import React from 'react';
import Slider from 'react-slick';

const text1 = "I can't thank these guys enough! Their team was resposible of the creation, development, and launch of my latest app, and everything went beyond my expectations. I hope we can work again sometime soon!";

const Testimonial = (props) => {
	return ( 
		<div className="testimonial-inside-slider">
			<div className="testimonial-div-image">
				<img className="testimonial-img-circle" src={props.image}/>
			</div>
			<div className="testimonial-div-text">
				<p className="testimonial-text"> 
					{props.text}
				</p>
				<br className="testimonial-break-line" />
				<p className="testimonial-name"> {props.name} </p>
				<p className="testimonial-company"> {props.company} </p>
			</div>
		</div>
	)
}

class TestimonialsSlider extends React.Component {
	render () {
	    const settings = {
	      dots: true,
	      dotsClass: 'testimonial-dots',
	      infinite: true,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      //autoplay: true,
	      autoplaySpeed: 3000,
	      speed: 2000
	    };
	    return (
	      <div className='testimonial-slider-container'>
	      	
	      	<Slider {...settings}>
        		<div> 
        			<Testimonial image='http://placekitten.com/g/250/250'
        				name='Jon Doe Jr.' company='Google Inc, CTO' text={text1}
        				/> 
    			</div>
          		<div> 
        			<Testimonial image='http://placekitten.com/g/250/250'
        				name='Jon Doe Jr.' company='Google Inc, CTO' text={text1}
        				/> 
    			</div>
    			<div> 
        			<Testimonial image='http://placekitten.com/g/250/250'
        				name='Jon Doe Jr.' company='Google Inc, CTO' text={text1}
        				/> 
    			</div>
    			<div> 
        			<Testimonial image='http://placekitten.com/g/250/250'
        				name='Jon Doe Jr.' company='Google Inc, CTO' text={text1}
        				/> 
    			</div>
	        </Slider>
	      </div>
	    );
	}
};

const TestimonialsSection = () => (
	<section className="testimonials-container">
		<div className="contact-container-caption">
			<div >
				<h1 className="testimonials-title"> Testimonials </h1>
				<div className="contact-divider"></div>
				<p className="contact-subtitle"> Know the impact, first hand from our very own </p>
				<p className="contact-subtitle"> partners in crime </p>
			</div>
			<TestimonialsSlider />
		</div>
	</section>
);

export default TestimonialsSection;