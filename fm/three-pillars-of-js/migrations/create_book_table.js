import { queryRunner } from "../index";

{
    queryRunner(`CREATE TABLE Book(
        bookshelf_id TEXT NOT NULL,
        url TEXT,
        name TEXT,
        author TEXT,
        id text TEXT NOT NULL,

        FOREIGN KEY (bookshelf_id) REFERENCES bookshelf(id)
    )`);
}




