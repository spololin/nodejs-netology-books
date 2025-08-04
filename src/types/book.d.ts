import { BookModel } from "../models/book";

interface IBook {
    readonly title: string;
    readonly authors: string;
    readonly description: string;
    readonly favorite: string;
    readonly fileCover: string;
    readonly fileName: string;
}

class BooksRepository {
    abstract createBook(book: IBook): void {
        try {
            const newBook = new BookModel(book);

            await newBook.save();

            return newBook;
        } catch (e) {
            console.error(e)
        }
    }
    abstract getBook(id: string): IBook | null {
        try {
            return await BookModel.findById(id);
        } catch (e) {
            console.error(e)
        }
    }
    abstract getBooks(): IBook[] {
        try {
            return await BookModel.find();
        } catch (e) {
            console.error(e)
        }
    }
    abstract updateBook(id: number, book: IBook): void {
        try {
            const foundBook = await BookModel.findById(id);

            await foundBook?.update(book);

            return foundBook;
        } catch (e) {
            console.error(e)
        }
    }
    abstract deleteBook(id: number): void {
        try {
            await BookModel.deleteOne({ _id: id })
        } catch (e) {
            console.error(e)
        }
    }
}
