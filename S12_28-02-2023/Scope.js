var id = 101 //global scope

function f1(){
    var city = "Delhi"
    console.log(id)
    console.log(city)

    function fn(){console.log("fn is declared")}
    fn()
}


function f2(){
  console.log(id)
  console.log(city)
 
}

function f3(){
    f1()
    f2()
}

f3()

