// Клас Todo
class Todo {
    async getTodoData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (response.status !== 200) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return await response.json(); 
        } catch (error) {
            console.error('There was a problem with getting data from server:', error);
            throw error; 
        }
    }
}

// Клас User
class User {
    async getUserData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            if (response.status !== 200) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('There was a problem with getting user data:', error);
            throw error; 
        }
    }
}


async function Alldata() {
    const todoService = new Todo();  //  екземпляр класу Todo
    const userService = new User();  //  екземпляр класу User

    try {
        const [todo, user] = await Promise.all([todoService.getTodoData(), userService.getUserData()]);
        console.log('Todo object:', todo);
        console.log('User object:', user);
    } catch (error) {
        console.error('Error with Promise.all:', error);
    }
}


async function Firstdata() {
    const todoService = new Todo();  //  екземпляр класу Todo
    const userService = new User();  //  екземпляр класу User

    try {
        const result = await Promise.race([todoService.getTodoData(), userService.getUserData()]);
        console.log('First result from Promise.race:', result);
    } catch (error) {
        console.error('Error with Promise.race:', error);
    }
}


Alldata();
Firstdata();
