import React, { useState, useMemo } from 'react'
const Usememo = () =>{
    let[count1,setCount1] = useState(0)
    let[count2,setCount2] = useState(0)
    let Even=useMemo(()=>{
        let i = 0
        while(i<100000000) i++
        return count1%2===0
    },[count1])
    return(
        <div>
            {count1}<br></br>
            <button onClick={()=>{setCount1(count1+1)}}>Increment</button><br></br>
            {Even?"Even":"Odd"}<br/>
            {count2}<br></br>
            <button onClick={()=>{setCount2(count2+1)}}>Increment2</button>
        </div>
    )
}
export default Usememo