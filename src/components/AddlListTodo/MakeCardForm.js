import React, { useState } from "react"
import { uuid } from "uuidv4"

const MakeCardForm = ({ onClickAddTodo, closeForm }) => {
  const [title, setTitle] = useState("")

  const onChangeAddTitle = (e) => {
    setTitle(e.target.value)
  }
  return (
    <div>
      <textarea
        onChange={onChangeAddTitle}
        value={title}
        placeholder="Enter a title for this card..."
      />
      <button onClick={() => onClickAddTodo({ id: uuid(), title })}> Add Card</button>
      <button onClick={() => closeForm()}>Close</button>
    </div>
  )
}

export default MakeCardForm
