import {useState,useRef,useEffect} from 'react';

function Timer(props) {
            let id = useRef("Kabir") // id = {current:"Kabir"} //id.current = 101
            let h2Ref = useRef(null) // h2Ref = {current:null}
            let btnStart= useRef(null)
            let btnStop = useRef(null)

            useEffect(()=>{
                btnStop.current.disabled = true
            },[])
   
    const [timer,setTimer] = useState(0)
      const startTimer = ()=>{
           h2Ref.current.style.color="green"
           btnStart.current.disabled = true
           btnStop.current.disabled= false

          id.current= setInterval(()=>{
             
                   setTimer((prevTimer)=>{return prevTimer + 1})
            },1000)
      }

      const stopTimer = ()=>{
        h2Ref.current.style.color="red"
        btnStart.current.disabled = false
        btnStop.current.disabled= true
       
            clearInterval(id.current)
      }
    return (
        <div style={{width:"300px",textAlign:"center",padding:"30px",margin:"100px auto",boxShadow:"0 0 10px red"}}>
            <h2 ref={h2Ref} id="h2">Timer : {timer}</h2>
            <button ref={btnStart} onClick={startTimer}>Start</button>&nbsp;&nbsp;&nbsp;
            <button ref={btnStop}   onClick={stopTimer} >Stop</button>
        </div>
    );
}

export default Timer;