import {useState} from 'react';
import B from './B';
import myContext from './Context';

function A(props) {
    const [data,setData] = useState("")
    return (
        <div>
            <h2>A Component</h2>
            <button onClick={()=>{setData("Delhi")}}>Send Data</button>
            {/* <B info={data} /> */}
           <myContext.Provider value={data}>  <B /> </myContext.Provider>
          
        </div>
    );
}

export default A;