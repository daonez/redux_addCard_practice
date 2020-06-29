import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteTodo, addTodo } from "../modules/addList"
import { bindActionCreators } from "redux"
import AddListCard from "../components/AddlListTodo/Cards"
import AddListForm from "../components/AddlListTodo/MakeCardForm.js"

const AddList = ({ addList, addTodo, deleteTodo, closeForm }) => {
  return (
    <>
      {addList && <AddListForm onClickAddTodo={addTodo} closeForm={closeForm} />}
      <div>
        {addList &&
          addList.map((list) => (
            <AddListCard
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
