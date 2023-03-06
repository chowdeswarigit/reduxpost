import React from "react"
import { useSelector } from "react-redux"
import PostList from "./PostList"

import PostForm from "./postForm"
// import PostList from "./PostList"

const Post = ()=>{
    const data  =useSelector((state => state))
    // console.log(data.post)

    return(
        <React.Fragment>
            <section className="contaier"> 
            
            <div className="row"> 
                <div className="col md-6">
                    <h1>Addd post</h1>
                    <PostForm />
                </div>
                <div className="col md-6">
                    <h5>Post List</h5>
                    <PostList post = {data.post}/>

                </div>

            </div>

            </section>
        </React.Fragment>
    )
}
 

    
    
    

export default Post