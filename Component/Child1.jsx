import './Child1.css';
const Child1=(props)=>{
    console.log(props)
    return(
        <div>
            {/* <h1>Hello world10</h1> */}
            <h1 className="header">WEB TECH</h1>
                {/* <h1>Hello {props.abc}</h1> */}
                {/* <h1>Hello {props.abc[0]}</h1>
                <h1>Hello {props.abc[1]}</h1>
                <h1>Hello {props.abc[2]}</h1> */}
                <div className = "box">
                <h1>Test : &nbsp;"{props.abc[0].Test}"</h1>
                <h1>id : &nbsp;{props.abc[0].id}</h1>
                <h1>Test : &nbsp;"{props.abc[1].Test}"</h1>
                <h1>id : &nbsp;{props.abc[1].id}</h1>
                <h1>Test : &nbsp;"{props.abc[2].Test}"</h1>
                <h1>id : &nbsp;{props.abc[2].id}</h1>
                </div>

               {/* <h1>hello</h1> { props.children} */}

                
            {/* <h1>Hello world10</h1> */}

        </div>
        
    )
}
export default Child1