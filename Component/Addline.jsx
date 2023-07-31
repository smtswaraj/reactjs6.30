import style from './crud.module.css'
import { useRef } from 'react';
const Addline =({setList})=>{
    const nameRef = useRef()
    const priceRef = useRef()
    const handleSubmit=(event)=>{
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newlist = {
            id: 3,
            name,
            price
        }
        setList((prevList)=>{
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        priceRef.current.value = ""
    }
    return(
        <form className={style.addForm} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" ref = {nameRef}/>
            <input type="text" name="price" placeholder="Enter Price" ref = {priceRef}/>
            <button type="submit">Add</button>
        </form>
    )
}
export default Addline