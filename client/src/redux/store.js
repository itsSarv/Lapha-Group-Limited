import { configureStore } from '@reduxjs/toolkit';
import boxSlice from './reducerSlice/userSlice'

export default configureStore({
  reducer: {
    box: boxSlice
  },
});