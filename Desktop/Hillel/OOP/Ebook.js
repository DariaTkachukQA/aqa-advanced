
import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('File format must be a non-empty string');
        }
        this._fileFormat = value;
    }

    printInfo() {
        super.printInfo();
        console.log(`File Format: ${this.fileFormat}`);
    }

    static createEBook(bookInstance, fileFormat) {
        if (!(bookInstance instanceof Book)) {
            throw new Error('Provided instance must be of type Book');
        }
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}

