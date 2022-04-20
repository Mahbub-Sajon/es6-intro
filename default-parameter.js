function add(num1, num2=0){
// (here num2=0 is a default value that means if i don't declare the value of num2 while calling then num2=0 will active).
    const total = num1 + num2;
    return total;
}
const result = add(15,17);
console.log(result);