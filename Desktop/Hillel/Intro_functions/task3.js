//Завдання 3
//Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
//available - доступна кількість товарів на складі
//ordered - кількість одиниць товару в замовленні
//Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
//Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
//У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”

function checkOrder(available, ordered){ 
    if (ordered === 0){
        console.log('Your order is empty');
    } else if (ordered > available) {
        console.log('Your order is too large, we don’t have enough goods.');
    } else{
        console.log('Your order is accepted');
    }

}
checkOrder(30,15);
checkOrder(10,15);
checkOrder(20,0);