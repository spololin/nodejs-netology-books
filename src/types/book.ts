import {BookModel} from "./models/book";

export interface IBook {
    readonly title: string;
    readonly authors: string;
    readonly description: string;
    readonly favorite: boolean;
    readonly fileCover: string;
    readonly fileName: string;
}

export class BooksRepository {
    async createBook(book: IBook): Promise<void> {
        try {
            const newBook = new BookModel(book);

            await newBook.save();

            return newBook;
        } catch (e) {
            console.error(e)
        }
    }

    async getBook(id: string): Promise<IBook | null> {
        try {
            return await BookModel.findById(id);
        } catch (e) {
            console.error(e)
        }
    }

    async getBooks(): Promise<IBook[]> {
        try {
            return await BookModel.find();
        } catch (e) {
            console.error(e)
        }
    }

    async updateBook(id: number, book: IBook): Promise<void> {
        try {
            const foundBook = await BookModel.findById(id);

            await foundBook?.update(book);

            return foundBook;
        } catch (e) {
            console.error(e)
        }
    }

    async deleteBook(id: number): Promise<void> {
        try {
            await BookModel.deleteOne({_id: id})
        } catch (e) {
            console.error(e)
        }
    }
}
