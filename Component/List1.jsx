import {useState, Fragment} from 'react';
import Dummy from "./userData.json"
const List1=()=>{
    let [abc] = useState(Dummy)
    console.log(Dummy)
    return(
        <div>
            {
                abc.map((x)=>{
                    return(
                    //    <h1>{x}</h1>
                    //    <h1>{x.avatar_url}</h1>
                    // <div>
                    // <></>
                    <Fragment key={x.id}>
                        {/* <img src={x.avatar_url} alt="Problem"/> */}
                        <h1>{x.login}</h1>
                    </Fragment>
            
                    // </div>
                       

                    )
                    
                })
            }
        </div>            
    )
}
export default List1