import {useState,useContext}from 'react';
import { AuthContext } from './CustomProvider';

function Login(props) {
   const {login} =useContext(AuthContext)
    const [user,setUser] = useState({
        username:"",
        password:""
    })
    var loginStyle = {
        width:"300px",
        padding:"30px",
        margin:"100px auto",
        textAlign:"center",
        boxShadow:"0 0 10px black"
    }

    const handleAuthetication = ()=>{
            if(user.username === "kabir" && user.password === "kabir@123"){
                          login()
            } else {
                alert("Enter Proper Credentials")
            }
    }
    return (
        <div style={loginStyle}>
            <h2>Login Form</h2>
            <div>
                <input type="text" placeholder='user name'
                 onChange={(e)=>{setUser({
                    ...user,
                    username:e.target.value
                 })}}
                />
            </div><br/>
            <div>
                <input type="password" placeholder='password'
                onChange={(e)=>{setUser({
                    ...user,
                    password:e.target.value
                 })}}
                />
            </div><br/>
            <div>
                <input type="button" value="Login" onClick={handleAuthetication} />
            </div>
        </div>
    );
}

export default Login;