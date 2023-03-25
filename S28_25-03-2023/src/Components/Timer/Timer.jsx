import {useState} from 'react';

function Timer(props) {
    let timerId;
    const [timer,setTimer] = useState(0)
      const startTimer = ()=>{
          timerId= setInterval(()=>{
             
                   setTimer((prevTimer)=>{return prevTimer + 1})
            },1000)
      }

      const stopTimer = ()=>{
            clearInterval(timerId)
      }
    return (
        <div style={{width:"300px",textAlign:"center",padding:"30px",margin:"100px auto",boxShadow:"0 0 10px red"}}>
            <h2 id="h2">Timer : {timer}</h2>
            <button onClick={startTimer}>Start</button>&nbsp;&nbsp;&nbsp;
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
}

export default Timer;