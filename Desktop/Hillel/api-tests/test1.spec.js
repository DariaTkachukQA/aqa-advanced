const axios = require("axios");

describe("Tests with Get to API", () => {
  test("Get all book list", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        //calling the get API
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response.data);
    expect(response.status).toEqual(200); //asserting if the response code is 200
  });

  test("Get title of specific book", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        //calling the get API
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    expect(response.status).toEqual(200); //asserting if the response code is 200
    expect(response.data[2].title).toBe("fugiat veniam minus");
  });

  test("Check userId of specific todo", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    expect(response.status).toEqual(200); // Check if status is 200
    expect(response.data[2].userId).toBe(1);
  });

  test("Check if the specific todo is completed", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    expect(response.status).toEqual(200); // Check if status is 200
    expect(response.data[6].completed).toBe(false);
  });

  test("Check if each todo has an id", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    expect(response.status).toEqual(200); // Check if status is 200
    expect(response.data.every((todo) => todo.hasOwnProperty("id"))).toBe(true);
  });
});
describe("Tests with Post to API", () => {
  test("Create a new todo item", async () => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "New Task",
        body: "This is a new user",
        userId: 1,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      },
    );

    console.log(response.data);
    expect(response.status).toEqual(201); // Assert if the response code is 201
    expect(response.data.title).toBe("New Task"); // Assert if the title is correct
    expect(response.data.body).toBe("This is a new user"); // Assert if the body is correct
    expect(response.data.userId).toBe(1); // Assert if the userId is correct
  });

  test("Create a todo with an empty title", async () => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "",
        body: "This is a user without title",
        userId: 1,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      },
    );

    console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data.title).toBe("");
    expect(response.data.body).toBe("This is a user without title");
  });
});
describe("Test demoqa", () => {
  test("Add specific book to a user", async () => {
    const userId = "0b825c18-3791-4ba0-9acf-8e4c5a952993";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkRhcmlhVCIsInBhc3N3b3JkIjoiRGFyaWExMjMhISIsImlhdCI6MTczMzY4MjE1Nn0.A-cLWrjrGYaqm_4J6dHq6juzZKt7-uOdDYURJ-oaIBI";
    const isbn0 = "9781449337711";

    const response = await axios.post(
      `https://bookstore.toolsqa.com/BookStore/v1/Books'`,
      {
        userId: userId,
        collectionOfIsbns: [
          {
            isbn: isbn0,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log(response.data);
    expect(response.status).toEqual(201);
    //expect(response.data.books[0].isbn).toBe(isbn0);
  });
});
