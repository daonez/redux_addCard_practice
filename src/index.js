import React from "react"
import ReactDOM from "react-dom"
//import GlobalStyles from "./styles/GlobalStyle"
//import { createStore } from "redux"
//import { Provider } from "react-redux"
//import rootReducer from "../src/modules/index"
//import { composeWithDevTools } from "redux-devtools-extension"
import AddList from "./components/TrelloCreate"
//const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <GlobalStyles /> */}
    <AddList />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
)
