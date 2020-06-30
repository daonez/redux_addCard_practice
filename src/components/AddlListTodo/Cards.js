import React, { useState } from "react"
import AddCard from "../../containers/AddCard"
import AddNewList from "../AddNewList"

const AddListCard = ({ id, title, onClickDeleteTodo, list }) => {
  return (
    <div>
      <h4>{title}</h4>
      <button onClick={() => onClickDeleteTodo(id)}>Delete</button>
    </div>
  )
}

export default AddListCard
