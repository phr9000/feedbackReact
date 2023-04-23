import Card from './shared/card'
import { useState } from "react"

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('this is an example of a feeback item')



  return (
    <Card>
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
    </Card>
  )
}

export default FeedbackItem
