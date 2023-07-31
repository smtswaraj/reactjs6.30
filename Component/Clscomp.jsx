import{Component} from "react";
class Clscomp extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
               <h1>Hello class</h1>
               PROPS CLASS
               {this.props.data}

            </div>
            
        )
    }
}
export default Clscomp