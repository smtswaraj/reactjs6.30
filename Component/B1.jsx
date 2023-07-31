import { useContext } from "react"
import {user} from "../App"

const B1= () =>{
    let useData = useContext(user)
    return(
        <div>
            {useData}
        </div>
    )
}
export default B1