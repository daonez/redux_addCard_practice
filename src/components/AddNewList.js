import React from "react"
import styled from "styled-components"

const AddNewList = ({ list, children, onClick }) => {
  return (
    <AddListContainer>
      <div>
        <Button onClick={onClick}> + {children}</Button>
      </div>
    </AddListContainer>
  )
}

export default AddNewList

const AddListContainer = styled.div`
  display: flex;
`

const Button = styled.button`
  width: 274px;
  height: 43px;
`
