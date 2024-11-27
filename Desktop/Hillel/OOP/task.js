
import { Book } from './Book.js';
import { EBook } from './Ebook.js';


const book1 = new Book('Nineteen Eighty-Four', 'George Orwell', 1949);
const book2 = new Book('To the Lighthouse', 'Virginia Woolf,', 1927);
const book3 = new Book('Emma', 'Jane Austen', 1815);


book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook('Wuthering Heights', 'Emily Brontë', 1800, 'PDF');
ebook1.printInfo();

const books = [book1, book2, book3, ebook1];
const oldestBook = Book.findOldestBook(books);

let bookInfo = `${oldestBook.title}, ${oldestBook.author}, ${oldestBook.year}`;

if (oldestBook instanceof EBook) {
    bookInfo += `, ${oldestBook.fileFormat}`;
}

console.log('Oldest book is:', bookInfo);