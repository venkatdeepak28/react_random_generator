// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandom = () => {
    const random = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: random}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="custom-btn"
            type="submit"
            onClick={this.generateRandom}
          >
            Generate
          </button>
          <p className="random-para">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
