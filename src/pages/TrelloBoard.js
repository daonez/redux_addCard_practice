import React from "react"
import TrelloCreate from "../components/TrelloCreate"

const TrelloBoard = () => {
  return (
    <div>
      <div>
        <h3>Trello</h3>
      </div>
      <div>
        <h4>Board Title </h4>
      </div>
      <div>
        <TrelloCreate />
      </div>
    </div>
  )
}

export default TrelloBoard
