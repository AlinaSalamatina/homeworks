// Задані значення
let unitOfMeasurement = "км";
let quantity = 10;

let unitOfTime = "год";
let quantity2 = 1;

let unitOfWeight = "кг";
let quantity3 = 1;

// Функція для конвертації одиниць вимірювання та виведення інформації
function convertAndPrint(unit, value) {
  let result;

  switch (unit) {
    case "км":
      result = value * 1000;
      console.log(`${value} км це ${result} м.`);
      break;
    case "год":
      result = value * 60;
      console.log(`${value} год. це ${result} хв.`);
      break;
    case "кг":
      result = value * 1000;
      console.log(`${value} кг це ${result} гр.`);
      break;
    default:
      console.log("Невідома одиниця виміру");
  }
}

// Виклик функції для конвертації та виведення інформації
convertAndPrint(unitOfMeasurement, quantity);
convertAndPrint(unitOfTime, quantity2);
convertAndPrint(unitOfWeight, quantity3);
// Якщо введена невідома одиниця виміру, програма виведе повідомлення про це.
