import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
  },
  reducers: {
    userLoginInfo: (state, actions) => {
        // console.log(actions);
        state.value = actions.payload
        
      
    
    },
   
  },
})

export const { userLoginInfo } = userSlice.actions

export default userSlice.reducer