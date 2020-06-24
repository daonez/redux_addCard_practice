import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
}
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
body{
  background:#64A6D3;
}
}
`

export default GlobalStyles
