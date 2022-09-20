import { queryRunner } from "../index";

{
    queryRunner(`CREATE TABLE Bookshelf(
        label TEXT,
        id TEXT NOT NULL PRIMARY KEY
    )`);
}




