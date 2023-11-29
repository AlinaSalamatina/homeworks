// Спосіб 1: Використання циклів for
function drawTriangle(height, symbol) {
  for (let i = 1; i <= height; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += symbol;
    }
    console.log(line);
  }
}

// Виклик функції
drawTriangle(5, "*");

//   Спосіб 2: Використання строк та рядків умов
function drawTriangle(height, symbol) {
  let triangle = "";
  for (let i = 1; i <= height; i++) {
    triangle += symbol.repeat(i) + "\n";
  }
  console.log(triangle);
}

// Виклик функції
drawTriangle(5, "*");
