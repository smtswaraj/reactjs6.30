const EditList=({current, lists, setList})=>{
    function handInputname(event){
        const value = event.target.value;
        const newlist = lists.map((li) => (li.id === current.id ? {...li,name:value} : li
            ))
        
        setList(newlist)
    }
    function handInputprice(event){
        const value = event.target.value;
        const newlist = lists.map((li) => li.id === current.id ? {...li,price:value} : li)
        
        setList(newlist)
    }
    return(
        <tr>
            <td><input type="text"  onChange={handInputname} value={current.name} name="name"/></td>
            <td><input type="text"  onChange={handInputprice} value={current.price} name="price"/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}
export default EditList