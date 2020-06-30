import React, { useState } from "react"
import MakeCardForm from "./MakeCardForm"
import AddNewList from "../AddNewList"

const AddListCard = ({ id, title, onClickDeleteTodo, list }) => {
  return (
    <div>
      <h4>{title}</h4>
      <MakeCardForm />
      <button onClick={() => onClickDeleteTodo(id)}>Delete</button>
    </div>
  )
}

export default AddListCard
