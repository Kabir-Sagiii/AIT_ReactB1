class A {

    name 
    city 

    constructor(n,c){
       this.name = n 
       this.city = c
    }

    displayDetails(){
        console.log(this.name,this.city)
    }
}

class B extends A {
    
     email = "Kabir@gmail.com"
     phone = 999999

     constructor(){
          super("Raj","Pune")
     }
      printDetails(){
        this.displayDetails()
        this.name = "Sagar"
        console.log(this.email,this.phone,this.name,this.city)
      }
}


  var b1 = new B()
  b1.printDetails()

