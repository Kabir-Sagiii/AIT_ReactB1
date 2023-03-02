class Users {
   
    name = "Kabir" //Property
    city= "Delhi"
    state="Delhi"
    #id = 101

display(){
      console.log(this.name,this.city,this.state)
      console.log(this.#id)
   }  //Methods

}

// to create object
var user1 = new Users()   // {name:"kabir",city:"delhi",state:"delhi",display:function(){--}}

user1.display()
console.log(user1.name)

var user2 = new Users() //{name,city,state,display}
user2.name = "Sagar"
user2.display();

