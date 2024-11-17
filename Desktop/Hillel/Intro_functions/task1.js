//Завдання 1
//Створіть функцію яка приймає два параметри: width і height.
//Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
//Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
//Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

function calculateArea(width,height) {
    let Area = width * height;
    return Area;
}
let result = calculateArea(5,10);
console.log("Площа прямокутника : " + result);

let calculateArea2 = function (width2, height2) {
    return width2 * height2;
} 

console.log("Площа прямокутника : " + calculateArea2(5,10));


const calculateArea3 = (width3, height3) => width3 * height3
console.log("Площа прямокутника : " + calculateArea3(5,10));