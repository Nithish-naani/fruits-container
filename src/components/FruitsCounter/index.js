// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  clickMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  clickBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="main-container">
        <div className="second-container">
          <h1 className="heading">
            Bob ate <span className="span">{mangoesCount}</span> mangoes
            <span className="span"> {bananasCount}</span> bananas
          </h1>
          <div className="img-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button
                className="mango-btn"
                onClick={this.clickMango}
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button
                className="banana-btn"
                onClick={this.clickBanana}
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
