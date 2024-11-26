/*Завдання 3
Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
У функції треба поділити numerator на denominator і повернути результат.
Додайте валідацію в функції. У разі,
якщо denominator дорівнює 0
або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.*/

function divide (numerator, denominator){

    if (typeof(numerator)!= "number" || typeof(denominator)!="number" ){
        throw new Error('Both numerator and denominator must be numbers');
    }
    if (denominator === 0){
        throw new Error('Denominator cannot be zero');
    }

    const result = numerator / denominator;
    return result;
}
function dividewithError(numerator, denominator) {
    try {
      const result = divide(numerator, denominator);
      console.log(`Result of ${numerator} / ${denominator} = ${result}`);
    } catch (error) {
      console.error('Error:', error.message);  //  повідомлення про помилку
    } finally {
      console.log('Робота завершена');  //  повідомлення "Робота завершена" в будь-якому випадку
    }
  }

dividewithError (0, "blue");
dividewithError (0,10);
dividewithError (4,8);
dividewithError (5,0);