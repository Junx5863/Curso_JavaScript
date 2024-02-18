function chooseOption(option) {
  switch (option) {
    case "1":
      sumsquareArea();

      break;
    case "2":
      listMultiples();
    case "3":
      higthNumber();
      break;
    case "4":
      smallestNumber();
      break;
    case "5":
      evenNumbers();
      break;

    default:
      break;
  }
}

function sumsquareArea() {
  let side = prompt("Ingrese el lado del cuadrado:");
  let area = side * side;
  console.log(area);
}

function listMultiples() {
  let numerber = prompt("Ingrese un numero:");
  let multiples = [];
  for (let i = 0; i <= 100; i++) {
    if (i % numerber === 0) {
      multiples.push(i);
    }
  }
  console.log(multiples);
}

function higthNumber() {
  let numbers = [];
  for (let i = 0; i < 5; i++) {
    let number = prompt("Ingrese un numero:");
    numbers.push(number);
  }
  console.log("El numero mas alto es: " + Math.max(...numbers));
}

function smallestNumber() {
  let numbers = [];
  for (let i = 0; i < 5; i++) {
    let number = prompt("Ingrese un numero:");
    numbers.push(number);
  }
  console.log("El numero mas bajo es: " + Math.min(...numbers));
}

function evenNumbers() {
  let numbers = [];
  for (let i = 0; i < 5; i++) {
    let number = prompt("Ingrese un numero:");
    numbers.push(number);
  }
  let even = numbers.filter((number) => number % 2 === 0);
  console.log(even);
}

alert(
  "Ingrese un numero:\n" +
    "1.  La suma de area de un cuadrado. \n" +
    "2. Multiplos de un numero \n" +
    "3. El numero Mayor \n" +
    "4. El numero Menor \n" +
    "5. Encontrar numeros pares en un arreglo \n" +
    "6. Exit"
);

let option = prompt("Enter your option:");

chooseOption(option);
