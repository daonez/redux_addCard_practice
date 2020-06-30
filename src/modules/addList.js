//Actions

export const ADD_LIST = "addList/ADD_LIST"
export const DELETE_LIST = "addList/DELETE_LIST"
export const ADD_CARD = "addList/ADD_CARD"

//ACTION TYPE

export const addTodo = ({ id, title }) => ({
  type: ADD_LIST,
  id,
  title,
})

export const addCard = ({ title, id, description }) => ({
  type: ADD_CARD,
  list: {
    id: id,
    title,
    description,
  },
})

export const deleteTodo = (id) => ({
  type: DELETE_LIST,
  id,
})

export default function addList(state = [], action) {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
        },
      ]
    case ADD_CARD:
      const addCardState = state.lists.concat(action.list)
      return addCardState

    case DELETE_LIST:
      const deleteState = state.lists.filter((todo) => todo.id !== action.id)
      return deleteState
    default:
      return state
  }
}
