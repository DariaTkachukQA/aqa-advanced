// Вибір числа для таблиці множення
let number = 6; // Можна змінити це число для генерації таблиці множення для іншого числа

// Таблиця множення за допомогою циклу for
console.log(`Таблиця множення для числа ${number} за допомогою циклу for:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log(""); // Пустий рядок для відступу

// Таблиця множення за допомогою циклу while
let j = 1;
console.log(`Таблиця множення для числа ${number} за допомогою циклу while:`);
while (j <= 10) {
  console.log(`${number} x ${j} = ${number * j}`);
  j++;
}