function countPrimeNumbers() {
	function isPrime(number) {
		for (let i = 2; i < number; i++)
		{
		  if (number % i === 0) { return 0;}
		}
		return 1;
	  }
	  function findPrimeNumbers() {
		list = [];
		for (let i = 2; i < 100; i++) {
		  if (isPrime(i) === 1)
		  { list.push(i); }
		}
		return list;
	  }
	  primes = findPrimeNumbers();
	  return primes.length
}
let start = performance.now();
for (let i = 0; i < 100; i++) {
	setTimeout(function() {countPrimeNumbers()}, 0)
}
let end = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (end - start) + " milliseconds.");
