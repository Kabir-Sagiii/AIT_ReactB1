function printMonth(num) {
  switch (
    num //1
  ) {
    case 1:
      {
        console.log("Current Month is Jan");
      }
      break;
    case 2:
      {
        console.log("Current Month is Feb");
      }
      break;
    case 3:
      {
        console.log("Current Month is Mar");
      }
      break;
    default: {
      console.log("The given number is not Valid");
    }
  }
}

printMonth(3);
