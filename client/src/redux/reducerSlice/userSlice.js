import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    width: 30,
    height:30,
    backgroundColor: 'black',
    borderRadius: '0%'
}

export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    changecolor: (state, action)=>{
      if(!action.payload){
        state.backgroundColor = 'black'
      }
      else{
      state.backgroundColor = action.payload}
    },
    changeshape: (state, action)=>{
      if(state.borderRadius == '0%'){
      state.borderRadius  = '50%'}
      else{
        state.borderRadius = '0%'
      }
    }
  },
});

export const { changecolor,changeshape } = boxSlice.actions;
export default boxSlice.reducer;