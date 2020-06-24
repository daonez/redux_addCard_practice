import React from "react"
import { BsPlusSquare, BsThreeDots } from "react-icons/bs"
import styled from "styled-components"
const Cards = () => {
  return (
    <CardContainer>
      <CardTitle>
        <p>
          <input type="text" value="hello" />
        </p>
        <BsThreeDots />
      </CardTitle>
      <div>
        <BsPlusSquare />
        Add a card
      </div>
    </CardContainer>
  )
}

export default Cards

const CardTitle = styled.div`
  display: flex;
`

const CardContainer = styled.div`
  background-color: #ebecf0;
  margin: auto;
`
