import React from "react"
import AddList from "../components/Cards/AddList"
import { connect } from "react-redux"
import { createList, deleteList } from "../Redux/modules/addList"

const AddListContainer = ({ openModal, createList, deleteList }) => {
  return <AddList openModal={openModal} onAdd={createList} onDelete={deleteList} />
}
