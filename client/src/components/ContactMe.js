import React, { Component } from 'react'

export default class ContactMe extends Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      Email: '',
      phoneNumber: '',
      message: ''
    }
  }



  render() {
    return (
      <div>
        <div className='contactform'>
          <form onSubmit='handleSubmit'>
            <p>Please enter your first name.</p>
            <input 
              type='text'
              name='firstName'
              onChange={ this.handleChange }
              value={ this.firstName }  
            />
            <p>Please enter your last name.</p>
            <input 
              type="text"
              name='lastName'
              onChange={ this.handleChange }
              value={ this.lastName }  
            />
            <p>Please enter your email address.</p>
            <input 
              type="text"
              name='phoneNumber'
              onChange={ this.handleChange }
              value={ this.lastName }
            />
            <p>If you would like please enter a phone number.</p>
            <input 
              type="text"
              name="phoneNumber"
              onChange={ this.handleChange }
              value={ this.phoneNumber }
            />
          </form>
        </div>
      </div>
    )
  }
}
