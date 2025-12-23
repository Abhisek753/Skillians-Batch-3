import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from "./counterSlice"
import studentReducer from "./studentSlice"

export const store = configureStore({ 
    reducer:{
        counter:counterReducer,
        students:studentReducer,
        
    }
 })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on