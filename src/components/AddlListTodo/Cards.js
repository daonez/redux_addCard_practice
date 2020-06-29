import React from "react"

const AddListCard = ({ id, title, onClickDeleteTodo }) => {
  return (
    <div>
      <h4>{title}</h4>
      <button onClick={() => onClickDeleteTodo(id)}>Delete</button>
      {/* <p>hello</p> */}
    </div>
  )
}

export default AddListCard
