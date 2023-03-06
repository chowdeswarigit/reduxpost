import { useDispatch, useSelector } from "react-redux"
// import { decrement, increment, reset } from "./redux/CounterSlice"
import 'bootstrap/dist/css/bootstrap.min.css';
import { decrement, increment, incrementby10, reset } from "./redux/CounterReducer";

const Counter = () =>{



    const data = useSelector((state) =>state.data)
     const dispatch = useDispatch()
    //  const post = useSelector((state)=> state.post)
     console.log(data)

    return(
        <div>
        <h1>Counter - {data.counter}</h1>
        <button className="btn btn-success" onClick={()=> dispatch(increment())}>increment</button>
        <button className="btn btn-danger" onClick={() => dispatch(decrement())}>Decrement</button>
        <button className="btn btn-info" onClick={()=>dispatch(reset())}>Reset</button>
        <hr></hr> 
        <h2>counter - {data. counterten}</h2>
        <button className="btn btn-warning" onClick={()=>dispatch(incrementby10())}>increment by 10 </button>
        
      {/* {post.map((item,index)=>{
        <div>
            <h1>{item.title}</h1>
            </div>
      })} */}

         </div>
    )
}
export default Counter