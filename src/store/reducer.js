import * as actionTypes from './constants'
const initialState = {
  count: 0,
  banners: []
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUM:
      return { ...state, count: state.count + action.num }
    case actionTypes.SUB_NUM:
      return { ...state, count: state.count - action.num }
    case actionTypes.FETCH_HOME:
      return { ...state, banners: action.banners }
    default:
      return state
  }
}

export default reducer