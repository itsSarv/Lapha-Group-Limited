import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducerSlice/userSlice'
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    user: userSlice
  },
  middleware :()=> [logger]
});