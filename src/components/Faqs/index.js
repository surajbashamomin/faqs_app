// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {imageIcon: false}

  onButtonClick = () => {
    this.setState({imageIcon: !imageIcon})
  }

  render() {
    const {imageIcon} = this.state
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <h1 className="main-heading">FAQS</h1>
        <ul className="list-container">
          {faqsList.map(eachItem => (
            <FaqItem
              eachItem={eachItem}
              key={eachItem.id}
              imageIcon={imageIcon}
              onButtonClick={this.onButtonClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
