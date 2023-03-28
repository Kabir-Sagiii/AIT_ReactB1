import {useState,useEffect} from 'react';

function Image(props) {

          const [title,setTitle] = useState("React")

    const [state,setState] = useState("https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png")

    useEffect(()=>{
         localStorage.setItem('name','Kabir')
         localStorage.setItem('city','Delhi')
        // console.log("Callback Called")

        return ()=>{
            localStorage.removeItem('name')
        }
  },[state,title])


    return (
        <div>
            <h2 style={{color:"green"}}>{title}</h2>
            <img src={state} width="500" height={300} /> 
          <br/><br/>  
           <button onClick={()=>{setTitle("Next JS")}}>Change Title </button>&nbsp;&nbsp;
          <button onClick={()=>{
          
            setState("https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png")}} >Next JS</button>
        </div>
    );
}

export default Image;