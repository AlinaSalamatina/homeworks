function checkProbabilityTheory(count) {
  if (typeof count !== "number" || count <= 0 || !Number.isInteger(count)) {
    console.error("Неправильний параметр count. Введіть ціле додатне число.");
    return;
  }

  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    const randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    if (randomNum % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const totalNumbers = evenCount + oddCount;
  const evenPercentage = (evenCount / totalNumbers) * 100;
  const oddPercentage = (oddCount / totalNumbers) * 100;

  console.log("Кількість згенерованих чисел:", totalNumbers);
  console.log("Парних чисел:", evenCount);
  console.log("Непарних чисел:", oddCount);
  console.log(
    "Відсоток парних до не парних:",
    evenPercentage.toFixed(2) + "% : " + oddPercentage.toFixed(2) + "%"
  );
}

// Приклад виклику функції з 100 разів генерування випадкових чисел
checkProbabilityTheory(100);
