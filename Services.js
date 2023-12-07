var services = {
  стрижка: "60 грн",
  гоління: "80 грн",
  "Миття голови": "100 грн",

  price: function () {
    let total = 0;
    for (let service in this) {
      if (
        typeof this[service] === "string" &&
        !isNaN(parseInt(this[service]))
      ) {
        total += parseInt(this[service]);
      }
    }
    return total;
  },

  minPrice: function () {
    let min = Infinity;
    for (let service in this) {
      if (
        typeof this[service] === "string" &&
        !isNaN(parseInt(this[service]))
      ) {
        min = Math.min(min, parseInt(this[service]));
      }
    }
    return min === Infinity ? 0 : min;
  },

  maxPrice: function () {
    let max = -Infinity;
    for (let service in this) {
      if (
        typeof this[service] === "string" &&
        !isNaN(parseInt(this[service]))
      ) {
        max = Math.max(max, parseInt(this[service]));
      }
    }
    return max === -Infinity ? 0 : max;
  },
};

// Додавання нової послуги
services["Розбити скло"] = "200 грн";

// Виведення результатів
console.log("Загальна вартість послуг:", services.price() + " грн");
console.log("Мінімальна вартість послуги:", services.minPrice() + " грн");
console.log("Максимальна вартість послуги:", services.maxPrice() + " грн");
