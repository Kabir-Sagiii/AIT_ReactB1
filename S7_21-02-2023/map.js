var arr = [10, 30, 50, 33, 57];

arr.forEach(function (element, index) {
  //logic
});

var newArray = arr.map(function (element, index) {
  var result = element + 100;
  return result;
});

// newArray = [110,130,150,133,157]
console.log(arr);
console.log("----------------------------------------");
console.log(newArray);
