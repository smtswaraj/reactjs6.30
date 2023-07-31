import {useRef} from "react"
const Unconterolled=()=>{
    let name = useRef()
    let email = useRef()
    let fatch=()=>{
        let name1 = name.current.value
        let email1 = email.current.value
        console.log(name1)
        console.log(email1)
    }
    return(
        <div>
            <label htmlFor="lb">Name:- </label>
            <input type="text" id="lb" ref = {name}/><br/>
            <br/>
            <label htmlFor="em">Email:- </label>
            <input type="email" id="em" ref = {email}/><br/>
            <br/>
            <button onClick={fatch}>Submit</button>
        </div>
    )
}
export default Unconterolled