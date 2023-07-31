import {Component} from "react"
class ClasState extends Component{
    constructor(){
        super()
        this.state={
            name:"Good-Afternoon"
        }
    }
    btn =()=>{
        this.setState({
            name:"Good-evening"
        })
    }

    render(){
        return(
            <div>
                <h1>Class Based Component</h1>
                {this.state.name}
                <button onClick={this.btn}>Dynamic</button>
            </div>
            
        ) 
    }
}
export default ClasState