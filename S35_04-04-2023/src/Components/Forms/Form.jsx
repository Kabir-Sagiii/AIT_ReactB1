import {useState,useRef} from 'react';

function Form(props) {
    const [formdata,setFormData] = useState({
        name:"",
        email:"",
        gender:"",
        city:""
    })
     const emailRef = useRef()
    var styles = {
        width:"300px",
        padding:"30px",
        margin:"100px auto",
        textAlign:"center",
        boxShadow:"0 0 10px black"
    }
      const handleForm= (event)=>{
          event.preventDefault()
        // console.log(document.getElementById('username').value)
        // console.log(emailRef.current.value)
          console.log(formdata)
      }

      const handleInputControl = (event)=>{
              setFormData({
                 ...formdata,
                 [event.target.name]:event.target.value
              })
      }

    return (
        <div style={styles}>
             <form onSubmit={handleForm}>
                <h2>User Registration </h2>
                <div>
                    <input name="name" type="text" placeholder='User Name' 
                    onChange={handleInputControl} />

{/* <input name="name" type="text" placeholder='User Name' id="username" /> */}
                </div><br/>
                <div>
                    <input name="email" type="email" placeholder='Email Id' 
                    onChange={handleInputControl} />

{/* <input name="email" type="email" placeholder='Email Id' ref={emailRef} /> */}
                </div><br/>
                <div>
                    <input  type="radio" name="gender" value="male"  onChange={handleInputControl}  />Male
                    <input type="radio" name="gender" value="female"  onChange={handleInputControl} />Female
                </div><br/>
                <div>
                    <select name="city"  onChange={handleInputControl} >
                        <option>Select City</option>
                        <option>Hyderabad</option>
                        <option>Banglore</option>
                        <option>Pune</option>
                        <option>Delhi</option>
                    </select>
                </div><br/>
                <button>Register</button>
             </form>
        </div>
    );
}

export default Form;