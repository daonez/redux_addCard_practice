import React from "react"
import ReactDOM from "react-dom"
import BoardLayout from "./components/TrelloBoard/BoardLayout"
import ResetCss from "../src/styles/ResetCSS"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "../src/Redux/modules"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ResetCss />
      <BoardLayout />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
