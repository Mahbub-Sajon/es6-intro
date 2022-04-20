const count = 5;
const old = '<h3 class= "friend-name">Friend-5</h3>';
const old2 = '<h3 class= "friend-name">Friend-' + count + '</h3>';
const new1 =  `<h3 class= "friend-name">Friend-${count}</h3>`;
console.log(new1);