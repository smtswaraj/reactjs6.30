import React, { useState } from 'react'
import style from './crud.module.css'
import Addline from './Addline'
import EditList from './EditList'

const Crud=()=>{
    const list = [
        {
            id:1,
            name:"Mac",
            price:"2542"
        },
        {
            id:2,
            name:"Lenovo",
            price:"2562"
        },

    ]
    const[lists,setList] = useState(list)
    const[updateState,setUpdateState] = useState(-1)

    return(
        <div className={style.crud}>
          <div>
            <Addline setList = {setList} />
            <form onSubmit={handleSubmit}>
            <table>
                {
                lists.map((current)=>(
                    updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                    <tr>
                        <td>{current.name}</td>
                        <td>{current.price}</td>
                        <td>
                            <button className={style.edit} onClick={() => handleEdit(current.id)}>Edit</button>
                            <button className={style.delete} type="button" onClick={()=>handleDelete(current.id)}>Delete</button>
                        </td>
                    </tr>
                ))
                }
            </table>
            </form>
            </div>  
        </div>
    )

    function handleEdit(id){
        setUpdateState(id)
    }
    function handleDelete(id){
        const newlist = lists.filter((li)=>li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event){
        event.preventDefault();
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const newlist = list.map((li) => (
            li.id === updateState ? {...li,name:name,price:price} : li
        ))
        setList(newlist)
        setUpdateState(-1)

    }
}
export default Crud