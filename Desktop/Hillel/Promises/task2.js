/*В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
Copy code
<https://jsonplaceholder.typicode.com/todos/1>
Функція повинна повертати як результат Promise що повертає об’єкт todo
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
Copy code
<https://jsonplaceholder.typicode.com/users/1>
Функція повинна повертати як результат Promise що повертає об’єкт user
Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних
*/

// данні про todo
function gettododata() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (response.status !== 200) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json(); 
      })
      .catch(error => {
        console.error('There was a problem with getting data from server:', error); 
        throw error; 
      });
}

// данні про користувача
function getUserdata() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (response.status !== 200) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with getting user data:', error);
        throw error; 
      });
}

// Promise.all для паралельного виконання обох запитів
Promise.all([gettododata(), getUserdata()])
    .then(results => {
        const [todo, user] = results;
        console.log('Todo object:', todo);
        console.log('User object:', user);
    })
    .catch(error => {
        console.error('Error with Promise.all:', error);
    });

// Promise.race для того, щоб отримати перший результат
Promise.race([gettododata(), getUserdata()])
    .then(result => {
        console.log('First result from Promise.race:', result);
    })
    .catch(error => {
        console.error('Error with Promise.race:', error);
    });

