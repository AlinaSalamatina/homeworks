function pad(str, char, count, isStart) {
  if (typeof str !== "string" || typeof char !== "string") {
    throw new Error("Перший та другий аргумент повинні бути рядками");
  }

  if (typeof count !== "number" || isNaN(count) || count <= 0) {
    throw new Error("Третій аргумент повинен бути додатнім числом");
  }

  if (typeof isStart !== "boolean") {
    throw new Error("Четвертий аргумент повинен бути булевим значенням");
  }

  // Перевірка, чи рядок вже має достатню довжину
  if (str.length >= count) {
    return str;
  }

  const padChars = char.repeat(count - str.length);

  return isStart ? padChars + str : str + padChars;
}

// Приклад використання
console.log(pad("qwerty", "+", 10, true)); // '++++qwerty'
console.log(pad("qwerty", "+", 10, false)); // 'qwerty++++'
