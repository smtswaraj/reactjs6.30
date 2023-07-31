import { useState } from 'react';
const List=()=>{
    let [value,setValue] = useState(["Hello","Hi","How r you"])

    return(
        <div>
            {
                value.map((x)=>{
                    return(
                       <h1>{x}</h1> 
                    )
                    
                })
            }
        </div>            
    )
}
export default List