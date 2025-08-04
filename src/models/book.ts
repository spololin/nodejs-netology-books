import { model, Schema } from "mongoose";
import { IBook } from '../types/book';

const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    authors: {
        type: String,
        default: "",
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    fileCover: {
        type: String,
        default: "",
    },
    fileName: {
        type: String,
        default: "",
    },
})

export const BookModel =  model("Book", bookSchema);
