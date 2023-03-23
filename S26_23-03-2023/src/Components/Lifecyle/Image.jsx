import {useState} from 'react';

function Image(props) {
    const [state,setState] = useState("https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png")
    return (
        <div>
            <h2 style={{color:"green"}}>Image Component</h2>
            <img src={state} width="500" height={300} /> 
          <br/><br/>  
          <button onClick={()=>{setState("https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png")}} >Next JS</button>
        </div>
    );
}

export default Image;