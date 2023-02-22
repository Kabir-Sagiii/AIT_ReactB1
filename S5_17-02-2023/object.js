//Object is Javascript

var user = {
  name: "Rahul",
  city: "Delhi",
  id: 101,
  isMarried: true,
  state: "Delhi", //pincode
};

console.log(user);
// How to new Property in the Existing Object
// <objectName>.<key Name> = <Value>

user.pincode = 500018;
user.email = "Rahul@gmail.com";

// console.log(user);

// How to Update the Value of Exisiting Object
// <objName>.<key Name> = <Updated Value>

user.city = "Mumbai";
user.state = "MH";
console.log(user);

// How to access Specific Property Value

// <objname>.<key Name>

// console.log(user.id, user.city, user.state);

// delete a specific Property

delete user.pincode;
delete user.state;
delete user.isMarried;
console.log(user);
