/*Завдання 5
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі*/

const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 40 }
  ];

  for (const person of users) {
    const {name, age } = person;
    console.log(name,age);
  }