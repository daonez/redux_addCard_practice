import React from "react"
import styled from "styled-components"

const TrelloForm = React.memo(({ list, text = "", onChange, closeForm, children }) => {
  const placeholder = list ? "Enter list title" : "Enter card title"
  return (
    <div>
      <div>
        <textarea
          placeholder={placeholder}
          autoFocus
          value={text}
          onChange={(e) => onChange(e)}
          onBlur={closeForm}
        />
        <div>
          {children}
          <button onClick={() => closeForm}>close</button>
        </div>
      </div>
    </div>
  )
})

export default TrelloForm
