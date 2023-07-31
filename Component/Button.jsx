import React from 'react'
const Button=(props)=>{
    console.log("Rendering Button")
    return(
        <div>
            <button onClick={props.Func}>{props.children}</button>
        </div>
    )
}
export default React.memo(Button)