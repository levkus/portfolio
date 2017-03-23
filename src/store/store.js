import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reducerModal from './reducerModal'

const middleware = []

const initialState = {}

const store = createStore(
  combineReducers({
    modal: reducerModal
  }),
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
