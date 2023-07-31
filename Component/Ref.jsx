import {useRef} from "react"
const Ref=()=>{
    let demoRef = useRef()
    console.log(demoRef)
    let cls=()=>{
        demoRef.current.style.background="red"
    } 
    let dark=()=>{
        document.body.style.background = "Black"
        document.body.style.color = "White"

    }
    let light=()=>{
        document.body.style.background = "pink"
        document.body.style.color = "black"

    }

    return(
        <div>
            <input onClick = {dark} type="radio" name = "swaraj" />Dark mode
            <input onClick = {light} type="radio" name = "swaraj"/>Night mode
            <h1 ref={demoRef}>Heading</h1>
            <button onClick={cls}>Click</button>
        </div>
    )
}
export default Ref