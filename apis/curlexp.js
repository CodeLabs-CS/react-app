import React, { Component } from 'react'
import { render } from 'react-dom'
import './style.css'

class App extends Component {
  constructor() {
    super()
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDh6Tw08vz_HI2ccN1nDe0XtMabFVy4SK0&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS')
    // send the request
    xhr.send()
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
}