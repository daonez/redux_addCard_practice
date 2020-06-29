import React, { useState } from "react"
import AddList from "../containers/AddList"
import AddNewList from "./AddNewList"

const TrelloCreate = ({ list }) => {
  const [formOpen, setFormOpen] = useState(false)

  const openForm = () => {
    setFormOpen(true)
  }
  const closeForm = () => {
    setFormOpen(false)
  }

  return formOpen ? (
    <AddList closeForm={closeForm}></AddList>
  ) : (
    <AddNewList list={list} onClick={openForm}>
      {"Add another list"}
    </AddNewList>
  )
}

export default TrelloCreate
