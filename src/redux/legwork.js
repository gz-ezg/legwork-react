import type from '../actions/actionType'

const initState = {
  taskingList: [],
  legworkList: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case type.SETTASKINGLIST:
      console.log(action)
      return { ...state, taskingList: action.payload }
    case type.SETLEGWORKLIST:
      return { ...state, legworkList: action.payload }
    default:
      return state
  }
}
