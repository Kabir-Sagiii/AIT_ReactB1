function f1(){
    let name1 = "Kabir"
   var city = "hyd"  // function scope: We can access this variable anywhere in the function
    if(true){
        console.log(city)
        let gender = "male"
        var id = 101
    }
    else {
        console.log(city)
        let marks = 100
    }
    console.log(gender)
}
   f1()