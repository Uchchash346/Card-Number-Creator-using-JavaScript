const data = [
  {
    name: "Mr Rashed",
    birthYear: "1999",
    currentYear: "2022",
    district: "Dhaka",
    postNo: 1200,
    priority: 2,
  },
  {
    name: "Mr Raju",
    birthYear: "1995",
    currentYear: "2022",
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
  {
    name: "Mr Raju",
    birthYear: "1975",
    currentYear: "2022",
    district: "Barishal",
    postNo: 1223,
    priority: 2,
  },
];

function cardDistrubution(input) {
  let output = [];

  input.forEach((element, index) => {
    const cardNumber = `${element.district
      .slice(0, 2)
      .toUpperCase()}${element.currentYear.slice(-2)}${element.postNo
      .toString()
      .slice(0, 2)}${element.birthYear}${"0".repeat(
      16 - (10 + (index + 1).toString().length)
    )}${index + 1}`;

    output.push({
      cardNumber: cardNumber,
      gift: (index + 1) % 2 === 0 ? "R" : "W",
      priority: element.priority,
    });
  });
  output.sort(function (x, y) {
    return (
      x.priority - y.priority || x.cardNumber[0].localeCompare(y.cardNumber[0])
    );
  });
  return output;
}

console.log(cardDistrubution(data));
