import High from "./High"
// import { useState } from "react"

const B = (pb) =>{
    console.log(pb)
    // let[count,setCount]=useState(0)
    // let increase=()=>{
    //     setCount(count + 1)
    // }
    return(
        <div>
            <h1>{pb.data}</h1>
            {/* <button onMouseOver={increase}>Increase</button> */}
            <button onMouseOver={pb.Func}>Increase</button>
        </div>
    )
}
export default High(B)
