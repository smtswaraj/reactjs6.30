import { useEffect,useState } from "react"
import axios from "axios"

  const  FetchData = ()=>{
      let [content, setContent] = useState([]) 
      let [id, setId] = useState("") 
      let idData=(e)=>{
        setId(e.target.value)
    }
    // console.log(id)
  useEffect(()=>{                                        
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response)=>{
            // console.log(response.data)
            setContent(response.data)
        })
      .catch(()=>{
          console.log("please give me data");
      })
      },[id])


    return(
        <div>
            {/* {
                content.map(
                    (x)=>{
                        return(
                            <div>
                                <h1>{x.id}</h1>
                                <h1>{x.title}</h1>           
                            </div>
                            
                        )
                    }
                )
            } */}
            <input type="text" value={id} onChange={idData}/>
            <h1>{id}</h1>
            <h1>{JSON.stringify(content)}</h1>            
            {console.log(content)}
        </div>
    )
}
export default FetchData