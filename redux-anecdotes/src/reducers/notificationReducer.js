import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'this is a notification',
  reducers: {
    notificationUpdate(state, action) {
      return action.payload
    }
  }
})

export const { notificationUpdate } = notificationSlice.actions
export default notificationSlice.reducer