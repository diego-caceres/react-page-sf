import React, { Component } from 'react';
import {sendEmail} from './api.js';
import ReactTimeout from 'react-timeout';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      sending: false,
      errorMessage: '',
      successMessage: ''
    };

    this.handleInputChange  = this.handleInputChange .bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });    
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.sending)
      return;

    if(!this.validation())
      return;

    this.setState({errorMessage: ''});
    console.log('handleSubmit');
    this.setState({sending: true});
    sendEmail(this.state.name, this.state.email, this.state.message, (res) => {
 
      this.setState({sending: false});
      if(res.error)
        console.log('Email not sent: ', res.error);
      else if(res.data) {
        console.log('Email sent: ', res.data);
        this.setState({ 
          name: '', 
          email: '', 
          message: '',
          successMessage: 'Message sent correctly!'
        });

        this.props.setTimeout(() => this.setState({successMessage: ''}), 2000);
      }
    });

    
  }

  validation() {
    if(this.state.email !== '' && this.state.name !== '' && this.state.message !== '') {
      if(!this.validateEmail(this.state.email)) {
        console.log('mail invalido');
        this.setState({errorMessage: 'Mail format is invalid'});
      }
      else 
        return true;
    }
    else {
      if(this.state.email === '') {
        console.log('Debe completar el mail');
        this.setState({errorMessage: 'Mail can\'t be empty'});
      }
      else if(this.state.name === '') {
        console.log('Debe completar el nombre');
        this.setState({errorMessage: 'Name can\'t be empty'});
      }
      else if(this.state.message === '') {
        console.log('Debe completar el message');
        this.setState({errorMessage: 'Message can\'t be empty'});
      }

      return false;
    }
  }

  validateEmail(value) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }

  render() {
    const sendClassName = !this.state.sending ? 'contact-send-button' : 'contact-send-button disabled';
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <div className="contact-name">          
          <input className="contact-input-text" 
            placeholder="Name" 
            name="name" type="text" 
            value={this.state.name} 
            onChange={this.handleInputChange} />
        </div>
        <div className="contact-email">          
          <input className="contact-input-text"
            placeholder="e-mail" 
            name="email" type="email" 
            value={this.state.email} required
            onChange={this.handleInputChange} />
        </div>
        <div className="contact-message">          
          <textarea className="contact-textarea"
            placeholder="Your Message" 
            name="message" 
            value={this.state.message} required
            onChange={this.handleInputChange} />
        </div>
        <div className="contact-button-container" >
          <input className={sendClassName} 
            type="submit" 
            disabled={this.state.sending}
            value={ this.state.sending ? 'Sending' : 'Send'} />
        </div>
        <p className="concact-error"> {this.state.errorMessage} </p>
        <p className="concact-success"> {this.state.successMessage} </p>
      </form>
    );
  }
}

export default ReactTimeout(ContactForm);