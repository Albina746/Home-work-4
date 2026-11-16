

function greet(){
    const name = prompt("Введите имя")
    console.log(`Здравствуйте, ${name}!`);
} 
greet()

function calculateSum(a, b) {
    return a + b 
} 
console.log(calculateSum(5, 3));
console.log(calculateSum(10, 20));

function checkAge(age){
    if(age<18){
        console.log("Доступ запрещён");
    }else{
        console.log("Доступ разрешён");
    }
}
console.log(checkAge(16));
console.log(checkAge(21));

function checkNumber(n){
    if(n % 2 === 0){
        return "Чётное число"
    }else{
        return "Нечётное число"
    }
}
console.log(checkNumber(10));
console.log(checkNumber(7));

function calculator(a, b, operator) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/":
      if (b === 0) return "На ноль делить нельзя";
      return a / b;
    default:
      return "Неизвестная операция";
  }
}
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));
console.log(calculator(10, 0, "/"));
console.log(calculator(10, 5, "%"));
