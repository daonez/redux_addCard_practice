import React, { useState } from "react"
import TrelloForm from "./TrelloForm"
import AddNew from "./AddNew"

const TrelloCreate = ({ list }) => {
  const [formOpen, setFormOpen] = useState(false)
  const [text, setText] = useState("")

  const openForm = () => {
    setFormOpen(true)
  }
  const closeForm = () => {
    setFormOpen(false)
  }

  const handleInputChange = (e) => {
    setText({ text: e.target.value })
  }

  return formOpen ? (
    <TrelloForm name="text" text={text} onChange={handleInputChange} closeForm={closeForm}>
      <input />
      <div>
        <button> ADD</button>
      </div>
    </TrelloForm>
  ) : (
    <AddNew list={list} onClick={openForm}>
      {list ? "Add another list" : "Add another card"}
    </AddNew>
  )
}

export default TrelloCreate
