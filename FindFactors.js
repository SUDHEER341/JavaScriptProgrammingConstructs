var num = 10;
console.log("factors of 10 is :  ");

for (var i = 2; i <= num; i++) {
  while (num % i == 0) 
  {
    console.log(i);
    num /=  i; 
  }
}