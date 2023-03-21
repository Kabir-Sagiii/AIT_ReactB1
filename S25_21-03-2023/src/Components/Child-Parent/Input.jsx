import {useState} from 'react';

function Input(props) {
    const [inputdata,setInputdata] = useState("")
    var styles = {
        
        padding:"30px",
        boxShadow:"0 0 10px red",
        textAlign:"center",
        margin:"30px"
      
    }
      const getData = (event)=>{
            setInputdata(event.target.value)
      }
       const sendDataToParent = ()=>{
            props.updateState(inputdata)
       }
    return (
        <div style={styles}>
            <h2>Child Component</h2>
            <input type="text"placeholder='Enter Text' onChange={getData} />
            <button onClick={sendDataToParent}>Send Data to Parent</button>
        </div>
    );
}

export default Input;