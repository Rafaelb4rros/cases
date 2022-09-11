import { randomUUID } from "node:crypto";
import { queryRunner } from "./index";

interface Bookshelf {
    label?: string;
}

interface BookshelfEntity extends Bookshelf {
    id: string;
    create(): void;
}

function parseEntity<T extends Record<string, any>>(entity: T): (string | null)[] {
    return Object.values(entity).map(v => v == undefined ? null : v);
}


class Bookshelf implements BookshelfEntity {
    public id: string = randomUUID();

    constructor(
        public label?: string,
    ) { }

    public create(): void {
        const args: (string | null)[] = parseEntity(this);
        queryRunner(`INSERT INTO Book($1, $2)`, args);
    }
};

interface Book {
    id: string;
    bookshelf_id: string;
    url?: string;
    name?: string;
    author?: string;
}

interface BookEntity extends Book {
    id: string;
    create(): void;
}

class Book implements BookEntity {
    public id: string = randomUUID();

    constructor(
        public bookshelf_id: string,
        public url?: string,
        public name?: string,
        public author?: string
    ) { }
    
    create(): void {
        const args: (string | null)[] = parseEntity(this);
        queryRunner(`INSERT INTO Book($1, $2, $3, $4, $5)`, args);
    }
};

export {
    Book,
    Bookshelf
}
