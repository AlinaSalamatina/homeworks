let myObject = {
  name: "Angelina",
  age: 28,
  city: "New York",

  getInfo: function () {
    let result = "";
    for (let key in this) {
      if (typeof this[key] !== "function") {
        result += `${key}: ${this[key]}\n`;
      }
    }
    console.log(result);
  },
};

// Виведення інформації про об'єкт
myObject.getInfo();

// Додавання нової властивості
myObject.newProperty = "A teacher at High School";

// Виведення оновленої інформації про об'єкт
myObject.getInfo();
