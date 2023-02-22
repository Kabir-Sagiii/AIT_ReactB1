var arr = [10, 50, 60, 22, 31, 90, 100, 11];

// New Filtered Array which should contains only those values which are greater than 50

var newFilteredArray = arr.filter(function (ele, index) {
  return ele > 50; //true
});

// O/p :  [60,90,100]

console.log(newFilteredArray);
