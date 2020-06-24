import React, { useState } from "react"
import { BsPlusSquare } from "react-icons/bs"
import styled from "styled-components"

const AddList = () => {
  return (
    <div>
      <AddCardContainer>
        <button>
          <BsPlusSquare />
          Add another list
        </button>
      </AddCardContainer>
    </div>
  )
}

export default AddList

const AddCardContainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  width: 274px;
  height: 40px;
`
