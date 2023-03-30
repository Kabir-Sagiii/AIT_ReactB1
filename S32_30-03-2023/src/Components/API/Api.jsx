import {useState} from 'react';
import Users from './Users';
import Error from './Error';

function Api(props) {
    const [state,setState] = useState([])
    const getUserDetails = ()=>{
           fetch("https://reqres.in/api/users?page=2")
           .then((res)=>res.json())
           .then((results)=>{console.log(results)
                  setState(results.data)
        })
    }
    return (
        <div style={{padding:"30px",marginTop:"20px"}}>
              <h2>Users Information</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis beatae velit illum hic dolorem maiores itaque accusamus maxime dicta quos voluptates laboriosam quis quo, debitis unde eum fugit recusandae aut facere perspiciatis. Soluta nam error perspiciatis ipsum similique eligendi architecto debitis qui, vero optio vitae, enim commodi culpa atque nemo adipisci asperiores ducimus suscipit iusto deserunt esse earum. Nihil illo soluta iusto perspiciatis nisi placeat nobis corrupti, excepturi ipsum quae voluptatum cumque! Eum aspernatur eaque pariatur natus velit maiores odio dolorum incidunt, voluptas repellendus ipsa nulla recusandae repellat deleniti fugiat vitae laudantium magni delectus iure possimus error est qui. Vero fuga libero veniam consectetur soluta amet, magnam enim explicabo laboriosam. Facilis, saepe, non eius voluptate ex nobis ipsa, necessitatibus consectetur veniam fugiat laborum? Voluptatibus repellendus beatae enim amet consequuntur animi accusamus? Minus, ratione. Rem vero assumenda sapiente perferendis praesentium suscipit laborum veniam quae, sunt voluptatum recusandae quos obcaecati similique aliquid ipsum doloribus quis perspiciatis ut soluta provident? Ratione velit asperiores, eum rerum animi delectus provident eaque pariatur unde iusto aspernatur sint nihil odio in libero aliquam. Praesentium voluptatibus sapiente minus eaque nisi tempore aliquam hic quia quibusdam aperiam exercitationem est, unde quam molestias itaque? Veniam, optio provident illum excepturi exercitationem quasi perferendis atque! Inventore provident nulla sapiente a neque ratione, suscipit quam reiciendis consequuntur dolorem quas modi molestiae. Beatae voluptate accusantium corporis. Sequi, laudantium animi maiores rem aliquid at a harum ea ullam labore quis totam vitae quidem ipsam, voluptate quisquam incidunt neque tempora. Libero, quam. Iure at incidunt assumenda explicabo quisquam pariatur! Libero nam magni culpa labore placeat ex officia. Quis hic assumenda alias corporis rem possimus, enim fugit. Libero veritatis itaque, totam et beatae ad enim! In maiores illo quibusdam tempore suscipit blanditiis nobis perferendis eos, dolores alias perspiciatis dolor excepturi quas ex, accusamus eaque facilis ipsum?</p>
              {/* <button onClick={getUserDetails}>Get Users</button>&nbsp;&nbsp; */}
              
              <button onClick={()=>{getUserDetails()}}>Get Users</button>&nbsp;&nbsp;

              <button onClick={()=>{ setState([])}}>Remove Data</button>
                 {

                    state.length > 0   ? <Users users={state} /> :<Error />
               

                 }
                   
        </div>
    );
}

export default Api;