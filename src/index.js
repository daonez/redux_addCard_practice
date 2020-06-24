import React from "react"
import ReactDOM from "react-dom"
import BoardLayout from "./components/BoardLayout"
import ResetCss from "../src/styles/ResetCSS"

ReactDOM.render(
  <React.StrictMode>
    <ResetCss />
    <BoardLayout />
  </React.StrictMode>,
  document.getElementById("root")
)
