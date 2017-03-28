import React from 'react';
import ContactForm from './Contact/ContactForm.js';

const Contact = () => (
	<section className="contact-container">
		<div className="contact-container-caption">
			<div className="contact-caption">
				<h1> Contact us </h1>
				<div className="contact-divider"></div>
				<p className="contact-subtitle"> Take an in-depth look at the things we do </p>
				<p className="contact-subtitle"> and how we do them. </p>
			</div>
		</div>
		<ContactForm />		
	</section>
);

export default Contact;