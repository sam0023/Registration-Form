// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    errorFirstName: false,
    errorSecondName: false,
    showSuccessPage: false,
  }

  handleFirstName = event => {
    console.log('hi')
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({errorFirstName: true})
      console.log('u typed empty')
    } else {
      this.setState({firstName: event.target.value, errorFirstName: false})
      console.log('u typed something')
    }
  }

  updateFirstName = event => {
    this.setState({firstName: event.target.value, errorFirstName: false})
  }

  updateSecondName = event => {
    this.setState({secondName: event.target.value, errorSecondName: false})
  }

  handleSecondName = event => {
    const {secondName} = this.state
    if (!secondName) {
      this.setState({errorSecondName: true})
    } else {
      this.setState({secondName: event.target.value, errorFirstName: false})
    }
  }

  handleSubmitForm = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state

    if (!firstName && !secondName) {
      this.setState({errorFirstName: true, errorSecondName: true})
    } else if (!firstName) {
      this.setState({errorFirstName: true})
    } else if (!secondName) {
      this.setState({errorSecondName: true})
    } else {
      this.setState({showSuccessPage: true})
    }
  }

  handleResubmit = () => {
    this.setState({showSuccessPage: false, firstName: '', secondName: ''})
  }

  render() {
    const {
      firstName,
      secondName,
      errorFirstName,
      errorSecondName,
      showSuccessPage,
    } = this.state

    const formPage = (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor="first name">FIRST NAME</label>
        <input
          type="text"
          id="first name"
          value={firstName}
          placeholder="First name"
          onChange={this.updateFirstName}
          onBlur={this.handleFirstName}
        />
        {errorFirstName && <p>Required</p>}
        <br />

        <label htmlFor="second name">LAST NAME</label>
        <input
          type="text"
          id="second name"
          value={secondName}
          placeholder="Last name"
          onChange={this.updateSecondName}
          onBlur={this.handleSecondName}
        />
        {errorSecondName && <p>Required</p>}
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    )

    const registeredPage = (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted Successfully</p>
        <button type="button" onClick={this.handleResubmit}>
          Submit Another Response
        </button>
      </div>
    )

    const finalPage = showSuccessPage ? registeredPage : formPage
    return (
      <div>
        <h1>Registration</h1>
        <div>{finalPage}</div>
      </div>
    )
  }
}
export default RegistrationForm
