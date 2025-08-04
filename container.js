import { Container } from "inversify";
import "reflect-metadata";
import BooksRepository from "./src/types/book";

const container = new Container();
container.bind(BooksRepository).toSelf();

module.exports = container;
