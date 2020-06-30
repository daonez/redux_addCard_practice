import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteTodo, addTodo, addCard } from "../modules/addList"
import { bindActionCreators } from "redux"
import AddListCard from "../components/AddlListTodo/Cards"
import AddCardForm from "../components/AddlListTodo/MakeCardForm"

const AddList = ({ addList, addTodo, deleteTodo, closeForm, addCard }) => {
  return (
    <>
      {addList && <AddListCard onClickAddCard={addCard} closeForm={closeForm} />}
      <div>
        {addList &&
          addList.map((list) => (
            <AddCardForm
              key={list.id}
              id={list.id}
              title={list.title}
              description={list.description}
              onClickDeleteTodo={deleteTodo}
            />
          ))}
      </div>
    </>
  )
}

export default connect(
  (state) => ({
    addList: state.addCard,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        addTodo,
        deleteTodo,
        addCard,
      },
      dispatch
    )
)(AddList)
