import { randomUUID } from "node:crypto";
import { METHODS } from "./app";
import { queryRunner } from "./index";
import { AnyFN } from "./utils";

interface Bookshelf {
    _id: string
    label?: string;
}

type EntityCRUD = Bookshelf & { [K in typeof METHODS[number]]: AnyFN }
interface BookshelfEntity extends EntityCRUD { }

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
        queryRunner(`INSERT INTO Book values (?, ?)`, args as string[]);
    }
    public async list(): Promise<Bookshelf[]> {
        const data = await queryRunner(`SELECT * FROM Bookshelf`);
        if (Array.isArray(data)) {
            return data as Bookshelf[];
        }

        return [];
    }
    public async delete(id: string): Promise<void> {
        await queryRunner(`DELETE * FROM Bookshelf WHERE id = (?)`, [id]);
    }

    public update(): Bookshelf { }
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
        queryRunner(`INSERT INTO Book VALUES (?, ?, ?, ?, ?);`, args as string[]);
    }
};

export {
    Book,
    Bookshelf
}
