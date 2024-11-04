// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
let radius = 70.5;
let height = 50;

// Обчисліть об'єм циліндра за формулою π * radius^2 * height.
let volume = Math.PI * Math.pow(radius, 2) * height; // Використовуємо Math.pow для піднесення до квадрату

// Округліть отримане значення до 2 знаків після крапки.
let shortVolume = volume.toFixed(2);

// Виведіть результат.
console.log("Об'єм циліндра:", shortVolume);