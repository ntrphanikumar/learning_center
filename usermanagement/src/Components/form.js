import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname: '',
         lastname: '',
         country: ''
      }
    }
    handleFirstname = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    handleLastname = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }
    handleCountry = (event) => {
      this.setState({
        country: event.target.value
      })
    }
    handleSubmit = (event) => {
      alert('Details submitted')
      event.preventDefault()
    }
  render() {
    const { firstname, lastname, country } = this.state
    return (
      <div>
        <h1>React Form</h1>
      <form onSubmit={this.handleSubmit} >
        <label for="firstname">First name:</label>
        <input type="text" value={firstname} onChange={this.handleFirstname}></input><br></br>
        <label for="lastname">Last name:</label>
        <input type="text" value={lastname} onChange={this.handleLastname}></input><br></br>
        <label for="Email">EmailId:</label>
        <input type="text"></input><br></br>
        <label for="gender">Gender:</label>
        <input type="radio" id="male" name="male"></input>
        <label for="male">Male</label>
        <input type="radio" id="female" name="female"></input>
        <label for="female">Female</label><br></br>
        <label for="country">Country:</label>
        <select value={country} onChange={this.handleCountry}>
          <option value="India">India</option>
          <option value="South Korea">South Korea</option>
          <option value="Japan">Japan</option>
          <option value="Maldives">Maldives</option>
        </select><br></br>
        <h5>Famous Food:</h5>
        <ul>
          <li>Biryani</li>
          <li>Ice-Cream</li>
          <li>Chicken</li>
        </ul>
        <button type="submit">Submit</button>
      </form>
      </div>
      
      
    )
  }
}

export default form