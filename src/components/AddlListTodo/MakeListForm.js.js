import React, { useState } from "react"
import { uuid } from "uuidv4"

const AddListForm = ({ onClickAddTodo, closeForm }) => {
  const [title, setTitle] = useState("")

  const onChangeAddTitle = (e) => {
    setTitle(e.target.value)
  }
  return (
    <div>
      <input onChange={onChangeAddTitle} value={title} placeholder="Enter list title..." />
      <button onClick={() => onClickAddTodo({ id: uuid(), title })}> Add List</button>
      <button onClick={() => closeForm()}>Close</button>
    </div>
  )
}

export default AddListForm
