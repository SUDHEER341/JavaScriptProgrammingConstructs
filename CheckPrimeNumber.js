let number = 7;
let isPrime = false;
for (let i = 2; i <= number / 2; i++) 
{
  if (number % i == 0) {
    isPrime = true;
    break;
  }
}

if (!isPrime)
{
     console.log(num + ' is a prime number.');
}
else 
{
    console.log(num + ' is not a prime number.');
}

