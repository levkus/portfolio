import { SHOW_MODAL, HIDE_MODAL, SET_MODAL_CONTENT } from './actions'

const INITIAL_STATE = {
  isVisible: false,
  content: {}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isVisible: true }

    case HIDE_MODAL:
      return { ...state, isVisible: false }

    case SET_MODAL_CONTENT:
      return { ...state, content: action.payload }

    default:
      return state
  }
}
