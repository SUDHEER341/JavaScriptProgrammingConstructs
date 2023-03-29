var number = 1986;

console.log('Ones Place :-', number % 10);
console.log('Tens place :-', Math.floor((number / 10) % 10));
console.log("Hundred's place :-", Math.floor((number / 100) % 10));
console.log("Thousand's place  :-", Math.floor(number / 1000));