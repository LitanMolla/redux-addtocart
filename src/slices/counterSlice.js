import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state,action) => {
      state.value+=action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, } = counterSlice.actions

export default counterSlice.reducer