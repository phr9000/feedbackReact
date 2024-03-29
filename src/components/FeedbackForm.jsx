import { useState, useContext } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from '../components/shared/Button'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {addFeedback} = useContext(FeedbackContext)

  const handleTextChange = (e) => {
    if(text==='') {
      setBtnDisabled(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 charaters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }
      
      addFeedback(newFeedback);
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you rate your service with us?</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className='input-group'>
          <input 
            onChange={handleTextChange} 
            type="text" 
            placeholder='write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>send</Button>
        </div>
        
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
