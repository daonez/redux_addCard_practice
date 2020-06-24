import React from "react"
import { BsFillHouseFill, BsPlusSquare, BsPeopleCircle } from "react-icons/bs"
import styled from "styled-components"

const BoardNav = () => {
  return (
    <NavContainer>
      <div>
        <span>
          <BsFillHouseFill />
        </span>
      </div>
      Something Like Trello
      <div>
        <BsPlusSquare />
        <BsPeopleCircle />
      </div>
    </NavContainer>
  )
}

export default BoardNav

const NavContainer = styled.div`
  display: flex;
  background-color: #1b68a5;
  justify-content: space-between;
  height: 34px;
  padding: 10px 10px;
`

