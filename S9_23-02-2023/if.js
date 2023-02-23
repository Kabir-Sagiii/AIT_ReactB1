function fnIf(x, y) {
  //   kabir != Kabir
  var name = "Kabir";
  var city = "Delhi";

  if (x == name && y == city) {
    // false && true => false
    //false && false => false
    console.log(name + city);
  }
}

// fnIf("Raj", "Banglore");
// fnIf("Kabir", "Delhi");

//WAF to print the given numbe is Even

function printEven(num) {
  // even or not

  if (num % 2 === 0) {
    // 0 === 0 => true
    console.log("The given number is Even");
  }
}

printEven(101);
