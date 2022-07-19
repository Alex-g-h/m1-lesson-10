const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" }
];

const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);


/**
 * Return ordered array
 * @param {*} peopleArray Array of people with id key
 * @param {*} orders Order
 * @returns Ordered array
 */
function giveTalonsInOrder(peopleArray, orders) {
  resultArray = [];
  orders.forEach(order => {
    const man = peopleArray.find(elem => elem.id === order);
    if (man)
      resultArray.push(man);
  })
  return resultArray;
}