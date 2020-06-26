import React from "react"
import styled from "styled-components"

const AddNew = ({ list, children, onClick }) => {
  return (
    <button onClick={onClick}>
      <button>add</button>
      <p> {children}</p>
    </button>
  )
}

export default AddNew
