import {useState} from 'react';

import "./Counter.css"
function Counter(){
      let [state,setState]= useState(0)



   //   const incCount = ()=>{
   //        //1 or 3

   //         setState(state + 1)   //100

   //         setState(state + 1) //50

   //         setState(state + 100)  // 1
   //     } 

   const incCount = ()=>{
   

       setState((prevState)=>prevState + 1)    // asynchronous function

       setState((prevState)=>prevState + 50)  //asycn

       setState((prevState)=>prevState + 100)  //async 
   } 

    return   <div className="counter">
             <h1>Count Value is {state}</h1>
             <button onClick={incCount}>Increase Count</button>
         </div>
    
}

export default Counter