//Створіть змінну length і присвойте їй числове значення довжини прямокутника.
//Створіть змінну width і присвойте їй числове значення ширини прямокутника.
//Обчисліть площу прямокутника за формулою length * width і виведіть результат.
//Округліть кожне отримане значення до 2 значень після крапки
let lenght = 10;
let width = 5;

let Area = lenght * width;
let shortArea = Area.toFixed(2);

console.log("Площа прямокутника :", shortArea);