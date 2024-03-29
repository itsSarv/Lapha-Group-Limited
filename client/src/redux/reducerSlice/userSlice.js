import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails : {},
    token:'',
    isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      addUserDetails: (state, action)=>{
        const {userDetails, token} = action.payload
        return{
          ...state,
          isLoggedIn:true,
          userDetails,
          token
        }
      },
      logout: (state, action)=>{
        return{
          ...initialState
        }
      }
      }
});

export const {addUserDetails,logout} = userSlice.actions;
export default userSlice.reducer;