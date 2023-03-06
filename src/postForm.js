import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "./redux/postReducer"

const PostForm = () =>{
    const dispatch = useDispatch() ;

    const [title ,setTitle] = useState("") 
    const [desc ,setDesc] = useState("")


    const handleSubmit = (event) =>{

   

        event.preventDefault() 
        if(title  && desc) {

           
            const info = {id:nanoid(), title:title,desc:desc} 
            dispatch(addPost(info))
        }
       
        else{
            alert("pleae enter the all fields")
        }
        

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group ">
                    <label>Title:</label>
                    <input type="text" value ={title}   onChange = {(e) => setTitle(e.target.value)} lassName="form-control mb-3"/>
                </div>
                <div  className="form-group">
                    <label>Description:</label>
                    <input type="text"  value = {desc} onChange= {(e) =>setDesc(e.target.value)} className="form-control mb-3"/>

                </div>
                <div className="form-group">
                    <input type="submit" value="AddPost" className="btn btn-primary" />

                </div>

            </form>
        </div>
    )
}
export default PostForm 