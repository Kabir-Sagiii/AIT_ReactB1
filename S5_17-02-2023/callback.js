function fn(f) {
  f(10, 10);
  var city = "Delhi";
  console.log(city);
  f(5, 5);
  console.log("Main Function");
  f(2, 3);
}

function fnAdd(x, y) {
  console.log(x + y);
}

fn(fnAdd);

// fn(function () {
//   console.log("I am Callback Function");
// });

// output :
// I am callback function
//Delhi
//I am callback function
//Main function
//I am callback function
