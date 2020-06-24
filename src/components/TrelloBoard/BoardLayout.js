import React from "react"
import BoardNav from "./BoardNav"
import BoardBody from "./BoardBody"

const BoardLayout = () => {
  return (
    <div>
      <div>
        <BoardNav />
      </div>
      <div>
        <BoardBody />
      </div>
    </div>
  )
}

export default BoardLayout
