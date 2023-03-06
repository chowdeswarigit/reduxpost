import { useDispatch, useSelector } from "react-redux"
import { deletePost } from "./redux/postReducer"

const PostList = (props) =>{
    

    const dispatch = useDispatch() 


console.log(props.post)
    return(
        <div>
           {
            props.post.length > 0 ? <div>
                {
                    props.post.map((item,index)=> <article className="border p-2 m-2" key={index} >
                        <div className=" p-2 my-2 " >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        
                    </div>
                    <button onClick={()=>dispatch(deletePost(item.id))}>Delete</button>
                    </article>
                    )
                }
            </div> : null
           }

        </div>
    )
}
export default PostList