import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "../src/modules"
import { composeWithDevTools } from "redux-devtools-extension"
import TrelloBoard from "../src/pages/TrelloBoard"

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TrelloBoard />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
