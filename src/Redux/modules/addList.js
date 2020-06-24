//Actions
const CREATE_LIST = "addList/CREATE_LIST"
const LIST_TITLE = "addList/LIST_TITLE"
const DELETE_LIST = "addList/DELETE_LIST"

let id = 0
export const createList = (input) => ({ type: CREATE_LIST, input })
export const listTitle = (text) => ({ type: LIST_TITLE, text })
export const deleteList = () => ({ type: DELETE_LIST })

//Reducer

const initialState = {
  openModal: null,
  removeModal: null,
}

function addList(state = initialState, action) {
  switch (action.type) {
    case CREATE_LIST:
      return {
        openModal: true,
      }
    case DELETE_LIST:
      return {
        removeModal: true,
      }
    default:
      return state
  }
}

export default addList
