import { queryRunner } from "../index";

{
    queryRunner(`CREATE TABLE Book(
        id TEXT NOT NULL PRIMARY KEY,
        bookshelf_id TEXT NOT NULL,
        url TEXT,
        name TEXT,
        author TEXT,

        FOREIGN KEY (bookshelf_id) REFERENCES bookshelf(id)
    )`);
}




