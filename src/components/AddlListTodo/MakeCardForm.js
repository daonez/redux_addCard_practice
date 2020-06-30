import React, { useState } from "react"
import { uuid } from "uuidv4"

const MakeCardForm = ({ onClickAddCard, closeForm }) => {
  const [description, setDescription] = useState("")

  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div>
      <textarea
        onChange={onChangeDescription}
        value={description}
        placeholder="Enter a title for this card..."
      />
      <button onClick={() => onClickAddCard({ id: uuid(), description })}>Add Card</button>
      <button onClick={() => closeForm}>Close</button>
    </div>
  )
}

export default MakeCardForm
