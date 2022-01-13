import { COLLAPSE_SIDEBAR, EXPAND_SIDEBAR } from '../actionTypes/ui'

const initialState = {
  sidebarExpanded: true
}

const Ui = (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_SIDEBAR:
      return {
        ...state,
        sidebarExpanded: true
      }
    case COLLAPSE_SIDEBAR:
      return {
        ...state,
        sidebarExpanded: false
      }

    default:
      return state
  }
}

export default Ui
