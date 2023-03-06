import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    counter:0,
    counterten:10
}

const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter++
        },
        decrement:(state) =>{
            state.counter--
        },
        reset:(state)=>{
            state.counter= 0 
        },
        incrementby10: (state) =>{
            state.counterten += 10
        }
        

    }
})
export const {increment,decrement,reset,incrementby10} = CounterSlice.actions
export default CounterSlice.reducer