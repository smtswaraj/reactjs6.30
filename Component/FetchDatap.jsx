import { useState, useEffect } from "react"
import axios from "axios"

const FetchDatap=()=>{
    let[content,setContent] = useState([])
    let[id,setId] = useState("")
    let[btn,setBtn] = useState("")
    let Formhandle=()=>{
        setBtn(id)
    }
    // useEffect(axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
    useEffect(()=>{axios(`https://jsonplaceholder.typicode.com/posts/${btn}`)
    .then((responce)=>{
        setContent(responce.data)
        // console.log(responce.data)
    })
    .catch(()=>{
        console.log("please give me data");
    })
    },[btn])
    return(
        <div>
            <input type="text" value = {id} onChange={(e)=>{setId(e.target.value)}}/>
            <button onClick={Formhandle}>Submit</button>
            {content.title}
            <h1>{JSON.stringify(content)}</h1>
            
        </div>
     
    )
}
export default FetchDatap