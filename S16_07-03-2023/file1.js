 import id,{name1} from "./city.js"


  export var city = "Delhi"  // module scope // export


 export  function f1(){
     var num1 = 10
     var num2 = 20 
     console.log(num1 + num2)
     console.log(id)
  }

  function f2(){
    console.log("f2 is called")
    console.log(name1)
  }

  export default f2

 

    