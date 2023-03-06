import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import CounterSlice from "./redux/CounterReducer";
import postReducer from "./redux/postReducer";

import postSlice from './redux/CounterReducer'

const store  = configureStore({

    reducer:{
        data:CounterSlice,
        post:postReducer

    }
})
export default store