import React from "react"
import { BsX } from "react-icons/bs"

const AddListForm = ({ input, addList, removeList }) => {
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">Add List</button>
        <button>
          <BsX />
        </button>
      </form>
    </div>
  )
}

export default AddListForm
