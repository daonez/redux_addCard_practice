import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteTodo, addTodo } from "../modules/addList"
import { bindActionCreators } from "redux"
import AddListCard from "../components/AddlListTodo/Cards"
import AddListForm from "../components/AddlListTodo/MakeListForm.js.js"

const AddList = ({ addList, addTodo, deleteTodo, closeForm }) => {
  return (
    <>
      {addList && <AddListForm onClickAddTodo={addTodo} closeForm={closeForm} />}
      <div>
        {addList &&
          addList.map((lists) => (
            <AddListCard
              key={lists.id}
              id={lists.id}
              title={lists.title}
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
