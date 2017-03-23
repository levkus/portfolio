export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const SET_MODAL_CONTENT = 'SET_MODAL_CONTENT'

export const showModal = {
  type: SHOW_MODAL
}

export const hideModal = {
  type: HIDE_MODAL
}

export const setModalContent = content => ({
  type: SET_MODAL_CONTENT,
  payload: content
})
