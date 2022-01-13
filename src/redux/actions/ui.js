import { COLLAPSE_SIDEBAR, EXPAND_SIDEBAR } from '../actionTypes/ui'

export const expandSidebar = () => {
  return {
    type: EXPAND_SIDEBAR
  }
}
export const collapseSidebar = () => {
  return {
    type: COLLAPSE_SIDEBAR
  }
}
