var obj1 = {
    c : 100

}
var obj2 = {
    c : 500
}
var obj3 = {
    c : 1000
}

   function add(x,y){

      console.log(x + y + this.c)  // window.c
   }

//    add(10,20) // obj1  //this----->obj1

//    add(50,50) // obj2 // this----->obj2

//    add(100,100) // obj3 //this----obj3

      add.call(obj1,10,10)

      add.call(obj2,10,10)

      add.call(obj3,10,10)