
export class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }
   
    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Title must be a non-empty string');
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Author must be a non-empty string');
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if ((isNaN(value) ||  value.trim() === '' || value > new Date().getFullYear()))  {
            throw new Error('Year must be a valid number that is less than current year');
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    static findOldestBook(books) {
        let oldest = books[0];
    
        
        for (let book of books) {
            if (book.year < oldest.year) {
                oldest = book;  
            }
        }
        return oldest;
    }
}