import { combineReducers, createStore } from 'redux'
import Ui from './reducers/Ui'

const rootReducer = combineReducers({ Ui })

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
