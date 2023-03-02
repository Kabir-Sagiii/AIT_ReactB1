class A {

    display(){
        console.log("Display from A Class")
    }
}

class B extends A {
    c
   display(){
     super.display()
    this.c = 10 + 10
    console.log(this.c)
   }
}

   var c1 = new B() 
   c1.display()