var c = 800; // External code or external system or sideEffect

function fnAdd(x, y) {
  var a = x;
  var b = y;

  var result = a + b + c;
  return result;
}

console.log(fnAdd(10, 30));
//  Input :10,30   ------> Output : 40   -------> After adding C : 140,540.840
//  Input :6,7  ------> Output : 13
