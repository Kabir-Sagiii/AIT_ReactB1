import {useState} from 'react';
import Input from './Input';

function Text(props) {
    const [state,setState] = useState("Child Data")
    var styles = {
        width:"500px",
        padding:"30px",
        boxShadow:"0 0 10px black",
        textAlign:"center",
        margin:"100px auto"
    }
       const updateState = (data)=>{
           setState(data)
       }
    return (
        <div style={styles}>
            <h2>Parent Component</h2>
            <h3 style={{color:"green"}}> {state}   </h3>
            <Input updateState = {updateState} />
        </div>
    );
}

export default Text;