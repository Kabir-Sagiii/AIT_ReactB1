var data = [
  {
    id: 101,
    name: "Kabir",
  },
  {
    id: 102,
    name: "sagar",
  },
];

function displayDetails(id) {
  switch (id) {
    case data[0].id:
      console.log(data[0]);
    case data[1].id:
      console.log(data[1]);
  }
}

displayDetails(101);
