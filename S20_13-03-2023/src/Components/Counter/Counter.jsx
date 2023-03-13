import {useState} from 'react';

import "./Counter.css"
function Counter(){
      let [state,setState]= useState(0)

  var countValue = 0

     const incCount = ()=>{

           setState(state + 1) //2
        // console.log(countValu
        countValue = countValue + 1
        
        console.log(countValue)
         
     } 

    return   <div className="counter">
             <h1>Count Value is {state}</h1>
             <button onClick={incCount}>Increase Count</button>
         </div>
    
}

export default Counter