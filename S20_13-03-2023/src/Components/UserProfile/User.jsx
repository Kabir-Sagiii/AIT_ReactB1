import "./User.css"
import {useState} from 'react'

function User(props) {
             let [state,setState]  =  useState({
                  name:"Rahul Sharma",
                  gender:"Male",
                  email:"RahulSharma@gmail.com",
                  image:"https://images.squarespace-cdn.com/content/v1/587a9b3fbf629abac08b3ce9/1564863176664-N0937L7C4Z288Z3U02U8/Portraits_byAndreaDomjanPhotography_002.jpg?format=1500w"
             })
    return (
        <div style={{marginTop:"50px"}}>
            <h2>User Profile</h2>
            <div className="card">
                 <div style={{width:"40%"}}>
                    <img src={state.image} width="100%" height="100%"/>
                 </div>

                 <div style={{width:"60%",textAlign:"left",padding:"20px"}}>
                       <dl>
                        <dt><b>User Name</b></dt>
                        <dd>{state.name}</dd>
                        <dt><b>Gender</b></dt>
                        <dd>{state.gender}</dd>
                        <dt><b>Email Id</b></dt>
                        <dd>{state.email}</dd>
                        <dt><b>Description</b></dt>
                        <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem illum laudantium perspiciatis porro ipsam facere delectus qui odit omnis impedit necessitatibus dicta illo facilis, accusamus ab aliquid ipsa doloremque perferendis quisquam atque assumenda et. Nam aspernatur id sequi, expedita atque eveniet perspiciatis eaque enim rerum aut accusantium asperiores doloribus! Et.</dd>
                       </dl>
                       <button>Profile</button>
                 </div>
            </div>
             <button>Rahul Sharma</button>&nbsp;&nbsp;&nbsp;
             <button>Taniya Verma</button>
        </div>
    );
}

export default User;