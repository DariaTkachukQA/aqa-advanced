const { test, expect } = require('@playwright/test');
const APIController = require('../controllers/apiController'); 

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('Tests with API Controller', () => {
  let api;

  test.beforeEach(() => {
    api = new APIController(BASE_URL);
  });

  test('Get all book list', async () => {
    const response = await api.get('/todos');
    expect(response.status).toBe(200);
  });

  test('Get title of specific book', async () => {
    const response = await api.get('/todos');
    expect(response.status).toBe(200);
    expect(response.data[2].title).toBe('fugiat veniam minus');
  });

  test('Check if each todo has an id', async () => {
    const response = await api.get('/todos');
    expect(response.status).toBe(200);
    expect(response.data.every((todo) => todo.hasOwnProperty('id'))).toBe(true);
  });

  test('Create a new todo item', async () => {
    const response = await api.post('/posts', {
      title: 'New Task',
      body: 'This is a new user',
      userId: 1,
    });

    expect(response.status).toBe(201);
    expect(response.data.title).toBe('New Task');
  });
});
