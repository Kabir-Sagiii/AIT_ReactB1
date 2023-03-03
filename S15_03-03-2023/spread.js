var obj1 = {
    name:"Raj",
     city:"Mumbai",
     id:101,
     email:"Raj@gmail.com",
     phone:999999
}

var obj2 = {
    ...obj1,
    state:"MH",
    Designation:"SDE",
    city:"Hyd"
}

// console.log(obj1)
// console.log(obj2)



   var arr = [101,102,99,100,111,33,55]

   var newarr = [true,...arr,"Kabir"]

   console.log(newarr)