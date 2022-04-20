const numbers = [45, 23, 89, 60];
// numbers = [30, 15, 45, 67]; --> reasign in a const variable is not possible. 
numbers.push(777);
numbers[1] = 888; //injecting a number in a specific index number. 
// console.log(numbers);
const student = {roll: 101, name: 'rohimuddi', job: 'intern'};
// student = {name: 'mofiz'}; //can't assign new value at const variable.
student.name = 'mofiz';
console.log(student);
