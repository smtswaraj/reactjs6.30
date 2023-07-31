import { useState } from "react";
const High=(Wrappedcomp)=>{

function Hoc(){
    let[count,setCount] = useState(0)
    let incre=()=>{setCount(count+1)}
    return(
        <div>
            <Wrappedcomp data={count} Func = {incre}></Wrappedcomp>
        </div>
    )
}
return Hoc
}
export default High