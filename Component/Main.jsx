import React from 'react'
import Button from "./Button"
import Count from "./Count"
import { useState, useCallback } from "react"
import Title from "./Title"
const Main=()=>{
    let [age, setAge] = useState(25)
    let [salary, setSalary] = useState(25000)
    let increAge=useCallback(()=>{setAge(age+1)},[age])
    let increSalary=useCallback(()=>{setSalary(salary+5000)},[salary])
    // let increAge=()=>{setAge(age+1)}
    // let increSalary=()=>{setSalary(salary+5000)}
    // console.log("Rendering Main")
    return(
        <div>
            <Title/>
            <Count data={age}>Age</Count>
            <Button Func={increAge}>Age-Increase</Button>
            <Count data={salary}>Salary</Count>
            <Button Func={increSalary}>Salary-Increase</Button>
        </div>
    )
}
export default React.memo(Main)
