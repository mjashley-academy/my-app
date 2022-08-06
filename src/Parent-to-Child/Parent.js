
import Child from "./Child";
const Parent =  (props) =>{
    return(<Child myno = {101} {...props}/>);
}

export default Parent;