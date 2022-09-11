import { Book } from "./entities";

function Controller(argV: string) {
    const book = new Book('1', '2', '3', 's')
    console.log(book.create());
};

Controller('dsadsa');

