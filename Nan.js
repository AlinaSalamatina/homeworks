function myIsNaN(value) {
  // Перевірка, чи value не дорівнює самому собі (NaN)
  return value !== value;
}

// Приклади використання
console.log(myIsNaN(NaN)); // true
console.log(myIsNaN(123)); // false
console.log(myIsNaN("abc")); // false
console.log(myIsNaN(undefined)); // false
