import React from 'react'
const Count=(props)=>{
    console.log("Rendering Count")
    return(
        <div>
            {props.children}-{props.data}
        </div>
    )
}
export default React.memo(Count)