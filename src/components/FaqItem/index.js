// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachItem, imageIcon, onButtonClick} = props
  const {id, questionText, answerText} = eachItem

  const icon = imageIcon
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const alt = imageIcon ? 'minus' : 'plus'

  const onClickButton = () => {
    onButtonClick(id)
  }

  return (
    <li className="list-items">
      <div className="question-image-container">
        <h1 className="question-text">{questionText}</h1>
        <button className="button" type="button" onClick={onClickButton}>
          <img src={icon} alt={alt} className="image" />
        </button>
      </div>
    </li>
  )
}

export default FaqItem
