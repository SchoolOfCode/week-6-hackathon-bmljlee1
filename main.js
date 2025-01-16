export function isPerfectNumber(n) {
  let sum = 0;

  // Iterate through possible divisors
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  // Check if the sum of divisors equals the number
  return sum === n;
}
