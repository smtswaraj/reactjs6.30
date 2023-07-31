import {useEffect, useState} from "react"
const Useeffect=()=>{
    let [count, setCount] = useState(0)
    let [count1, setCount1] = useState(0)

    let incre = () =>{
        setCount(count+1)
    }
    let incre1 = () =>{
        // setCount(count+1)
        setCount1(++count1)
    }
    useEffect(()=>{
        console.log("hello bro")
    },[count])
    return(
        <div>
            {count}
            <button onClick={incre}>count</button>
            {count1}
            <button onClick={incre1}>count1</button>
        </div>
    )
}

export default Useeffect