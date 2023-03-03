var users = {
     name:"Raj",
     city:"Mumbai",
     id:101,
     email:"Raj@gmail.com",
     phone:999999
}

     function userDetails(user){
          //How to Destructure Properties from the Object
              let {id,name,email,phone}  =  user


          console.log(name,email)
          console.log(id,phone)
     }

        userDetails(users)