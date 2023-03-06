import { createSlice } from "@reduxjs/toolkit"; 


const initialState = [
    {
        id:1,
        title:"hello",
        desc:"welcome to p2f semi"
    },
    {
        id:2,
        title:"hi chow",
        desc:"how are you?"
    },
    

]


const PostSlice = createSlice({

    name:"post",
    initialState,
    reducers:{

        addPost:(state,action) =>{
            console.log(action.payload)
            state.push(action.payload)
            
        
        },
        deletePost:(state,action)=>{

            return state.filter((item,index) => item.id!== action.payload)
        }
       }

})

export const{addPost,deletePost} = PostSlice.actions
export default PostSlice.reducer