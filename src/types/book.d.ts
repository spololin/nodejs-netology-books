interface Book {
    readonly title: string;
    readonly authors: string;
    readonly description: string;
    readonly favorite: string;
    readonly fileCover: string;
    readonly fileName: string;
}

abstract class BooksRepository {
    abstract createBook(book: Book): void
    abstract getBook(id: number): Book | null
    abstract getBooks(): Book[]
    abstract updateBook(id: number, updatedBook: Book): void
    abstract deleteBook(id: number): void
}
