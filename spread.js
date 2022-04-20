const numbers = [23, 65, 99, 21, 34];
const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray);

const numbers2 = [...numbers, 56];
numbers2.push(33);
console.log(numbers2);