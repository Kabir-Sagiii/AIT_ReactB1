import Text from "./Text"
import {useState} from 'react'

function Input(props) {
         let [inputvalue,setInputValue]= useState("")

         let [childdata,setChildData] = useState("")
    
    var styles = {
        width:"500px",
        padding:"30px",
        boxShadow:"0 0 10px black",
        textAlign:"center",
        margin:"100px auto"
    }
      const handleData = (event)=>{
           setInputValue(event.target.value)
      }
      const sendDataToChild = ()=>{
            setChildData(inputvalue)
      }
    return (
        <div style={styles}>
            <h2>Input Component</h2>
            <input type="text" placeholder="Enter Content" onChange={handleData} />
            <button onClick={sendDataToChild}>send</button>
            <Text value={childdata} /> 

        </div>
    );
}

export default Input;