import "./User.css"
import {useState} from 'react'

function User(props) {
             let [state,setState]  =  useState({
                  name:"Rahul Sharma", // state.name = "Raj"
                  gender:"Male",
                  email:"RahulSharma@gmail.com",
                  image:"https://images.squarespace-cdn.com/content/v1/587a9b3fbf629abac08b3ce9/1564863176664-N0937L7C4Z288Z3U02U8/Portraits_byAndreaDomjanPhotography_002.jpg?format=1500w"
             })

               let [color,setColor] =  useState({
                    bgColor:"white",
                    textColor:"black",
                    title:"Check to Switch Dark Mode"
               })

     const changeDataToTaniya = ()=>{
            setState({
               name:"Tanya Verma",
               gender:"Female",
               email:"Ranyaverma@gmail.com",
               image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&w=1000&q=80"
            })
     } 
     
     const changeDataToRahul = ()=>{
          setState({
               name:"Rahul Sharma", 
               gender:"Male",
               email:"RahulSharma@gmail.com",
               image:"https://images.squarespace-cdn.com/content/v1/587a9b3fbf629abac08b3ce9/1564863176664-N0937L7C4Z288Z3U02U8/Portraits_byAndreaDomjanPhotography_002.jpg?format=1500w"
          })
     }
     
     const changeTheme = (event)=>{
          if(event.target.checked) {
                setColor({
                    bgColor:"black",
                    textColor:"white",
                    title:"Uncheck to Switch Light Mode"
               })
          } else {
               setColor({
                    bgColor:"white",
                    textColor:"black",
                    title:"Check to Switch Dark Mode"
               })
          }
        
     }
    return (
        <div style={{marginTop:"50px",}}>
            <h2>User Profile</h2>
            <div className="card" style={{backgroundColor:color.bgColor,color:color.textColor}}>
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
                       <button>Profile</button><br/><br/>
                       <input type="checkbox" onChange={changeTheme} />
                        <label>{color.title}</label>
                 </div>
            </div>
             <button onClick={changeDataToRahul} >Rahul Sharma</button>&nbsp;&nbsp;&nbsp;
             <button onClick={changeDataToTaniya}>Taniya Verma</button>
        </div>
    );
}

export default User;