/*Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити*/
async function gettododata() {
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


async function getUserdata() {
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
async function Alldata() {
    try {
      const [todo, user] = await Promise.all([gettododata(), getUserdata()]);
      console.log('Todo object:', todo);
      console.log('User object:', user);
    } catch (error) {
      console.error('Error with Promise.all:', error);
    }
  }

  async function Firstdata() {
    try {
      const result = await Promise.race([gettododata(), getUserdata()]);
      console.log('First result from Promise.race:', result);
    } catch (error) {
      console.error('Error with Promise.race:', error);
    }
  }

  Alldata();
  Firstdata();