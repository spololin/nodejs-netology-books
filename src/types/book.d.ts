interface Book {
    title: string;
    authors: string;
    description: string;
    favorite: string;
    fileCover: string;
    fileName: string;
}

abstract class BooksRepository {
    createBook(book: Book): void
    getBook(id: number): Book | null
    getBooks(): Book[]
    updateBook(id: number, updatedBook: Book): void
    deleteBook(id: number): void
}
