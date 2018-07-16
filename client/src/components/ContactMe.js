import React, { Component } from 'react'

import ContactInfo from './ContactInfo'

import TomVS from '../assets/TomVS.jpg'

export default class ContactMe extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      Email: '',
      phoneNumber: '',
      message: ''
    }
  }

  // handleChange = () => {

  // }

  render() {
    return (
      <div className='home'>
        <div className='welcome'>
        <img src={TomVS} alt="headShot" className='headShot'/>
          <p>If you would like to contact me please fill out you infomation to send me an email.</p>
          <div className='contactform'>
            <form> {/* <-- rememer to add the onSubmit function */}
              <p>Please enter your first name.</p>
              <input
                type='text'
                name='firstName'
                // onChange={ this.handleChange }
                value={this.firstName}
              />
              <p>Please enter your last name.</p>
              <input
                type="text"
                name='lastName'
                // onChange={ this.handleChange }
                value={this.lastName}
              />
              <p>Please enter your email address.</p>
              <input
                type="text"
                name='phoneNumber'
                // onChange={ this.handleChange }
                value={this.lastName}
              />
              <p>If you would like please enter a phone number.</p>
              <input
                type="text"
                name="phoneNumber"
                // onChange={ this.handleChange }
                value={this.phoneNumber}
              />
              <p>Enter you message here.</p>
              <textarea
                name="message"
                cols="30"
                rows="10"></textarea>
            </form>
            <button>Email me!</button>
          </div>
        </div>
        <ContactInfo />
      </div>
    )
  }
}
