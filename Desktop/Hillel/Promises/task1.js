/*Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. 
Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд*/

function Info (text, delay) {
    setTimeout(() => {
      console.log(text);
    }, delay);
  }
  
  Info ("Hello, teacher!", 10000);