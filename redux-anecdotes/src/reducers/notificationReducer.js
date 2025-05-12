import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    notificationSet(state, action) {
      return action.payload
    },
    notificationRemove() {
      return ''
    }
  }
})

export const { notificationSet, notificationRemove } = notificationSlice.actions

export const setNotification = ( content, duration ) => {
  console.log('setNotification', content, duration)
  return async dispatch => {
    dispatch(notificationSet(content))
    setTimeout(
      () => dispatch(notificationRemove()),
      duration * 1000
    )
  }
}

export default notificationSlice.reducer