import {useState} from 'react';

function Form(props) {
    const [formdata,setFormData] = useState("")
    var styles = {
        width:"300px",
        padding:"30px",
        margin:"100px auto",
        textAlign:"center",
        boxShadow:"0 0 10px black"
    }
      const handleForm= (event)=>{
          event.preventDefault()
          console.log(formdata)
      }

      const handleInputControl = (event)=>{
              setFormData(event.target.value)
      }
    return (
        <div style={styles}>
             <form onSubmit={handleForm}>
                <h2>User Registration </h2>
                <div>
                    <input type="text" placeholder='User Name' onChange={handleInputControl} />
                </div><br/>
                <div>
                    <input type="email" placeholder='Email Id' />
                </div><br/>
                <div>
                    <input type="radio" name="gender" value="male"  />Male
                    <input type="radio" name="gender" value="female" />Female
                </div><br/>
                <div>
                    <select>
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