function fnElseIf(x, y, z) {
  if (x > y && x > z) {
    //5 > 8 && 5 > 3 => false && true => false
    console.log("x is greater then y  and z");
  } else if (y > x && y > z) {
    // 8 > 5 && 8 > 3 =>true && true = >true
    console.log("y is greater then x  and z");
  } else {
    console.log("z is greater then x  and y");
  }
}

fnElseIf(5, 8, 3);
