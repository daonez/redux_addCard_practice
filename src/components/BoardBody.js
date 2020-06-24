import React from "react"
import { BsThreeDots } from "react-icons/bs"
import styled from "styled-components"
import Cards from "../components/Cards/Cards"

const BoardBody = () => {
  return (
    <>
      <TitleContainer>
        <div>
          <p>Hello</p>
        </div>
        <div>
          <BsThreeDots />
          Show menu
        </div>
      </TitleContainer>
      <CardHolder>
        <Cards />
        <Cards />
        <Cards />
      </CardHolder>
    </>
  )
}

export default BoardBody

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
`

const CardHolder = styled.div`
  display: flex;
`

const BoardContainer = styled.div`
  display: flex;
`
