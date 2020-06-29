//Actions

export const ADD_LIST = "addList/ADD_LIST"
export const DELETE_LIST = "addList/DELETE_LIST"

//ACTION TYPE

export const addTodo = ({ id, title, description }) => ({
  type: ADD_LIST,
  id,
  title,
  description,
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
    case DELETE_LIST:
      const deleteState = state.filter((todo) => todo.id !== action.id)
      return deleteState
    default:
      return state
  }
}
