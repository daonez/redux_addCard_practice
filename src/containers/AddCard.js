import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteTodo, addTodo } from "../modules/addList"
import { bindActionCreators } from "redux"
import AddListCard from "../components/AddlListTodo/Cards"
import AddCardForm from "../components/AddlListTodo/MakeCardForm"

const AddList = ({ addList, addTodo, deleteTodo, closeForm }) => {
  return (
    <>
      {addList && <AddListCard onClickAddTodo={addTodo} closeForm={closeForm} />}
      <div>
        {addList &&
          addList.map((list) => (
            <AddCardForm
              key={list.id}
              id={list.id}
              title={list.title}
              onClickDeleteTodo={deleteTodo}
            />
          ))}
      </div>
    </>
  )
}

export default connect(
  (state) => ({
    addList: state.addList,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        addTodo,
        deleteTodo,
      },
      dispatch
    )
)(AddList)
