//Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case

// Змінна для середньої оцінки студента
let averageGrade = 85; // Середня оцінка студента (від 0 до 100)

// Використовуємо конструкцію switch/case для визначення рівня успішності
switch (true) {
  case (averageGrade < 60):
    console.log("Незадовільно");
    break;
  
  case (averageGrade >= 60 && averageGrade <= 70):
    console.log("Задовільно");
    break;
  
  case (averageGrade >= 71 && averageGrade <= 80):
    console.log("Добре");
    break;
  
  case (averageGrade >= 81 && averageGrade <= 90):
    console.log("Дуже добре");
    break;
  
  case (averageGrade >= 91 && averageGrade <= 100):
    console.log("Відмінно");
    break;
  
  default:
    console.log("Невірне значення середньої оцінки");
}