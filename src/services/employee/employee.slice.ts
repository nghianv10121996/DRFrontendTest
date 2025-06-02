import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const {  } = employeeSlice.actions

export default employeeSlice.reducer