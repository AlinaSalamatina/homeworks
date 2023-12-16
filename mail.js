var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru", // Нам такі не підходять
  },
];

var trustedEmails = arr.filter(function (item) {
  // Регулярний вираз для валідації email і перевірка на довірені домени
  var emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

  return emailRegex.test(item.email);
});

console.log(trustedEmails);

//   Цей код використовує функцію filter для вибору лише тих об'єктів, що мають довірені email-адреси.
// Регулярний вираз перевіряє, чи адреса має правильний формат та чи належить до довіреного домену.
