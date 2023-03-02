var obj1 = {
    c: 100
}

var obj2 = {
    c : 300
}

 function add(x,y,z){
    console.log(x + y + z +this.c)
 }

   add.apply(obj1,[10,10,10])  //130

   add.apply(obj2,[10,10,10])  //330


//  var fn  = add.bind(obj2)
//     fn(100,100,100)


// var fn  = add.bind(obj2,100,100,200)
//     fn()


//add.bind(obj2,10,10,10)()

add.bind(obj2)(10,10,10)

