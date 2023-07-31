import { useState } from 'react';
const Controlled=()=>{
    let nameData =(e)=>{
        // console.log(e)
        e.preventDefault()
        console.log(e.target.value)
        setName(e.target.value)
    }
    let emailData =(e)=>{
        // console.log(e)
        e.preventDefault()
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    let abc =(e)=>{
        e.preventDefault()
         console.log(name)
         console.log(email)
    }

    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    return(
      <form>
          <label>Name:- </label>
          <input type="text" value={name} onChange={nameData}/><br></br><br></br>
          <label>Email:- </label>
          <input type="text" value={email} onChange={emailData}/><br></br><br></br>
          <button onClick={abc}>SUBMIT</button>
      </form>  
        )
    }
export default Controlled