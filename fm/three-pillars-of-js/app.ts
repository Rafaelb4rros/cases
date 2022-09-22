import { Bookshelf } from "./entities";
import { AnyFN } from "./utils";

const ENTITIES = ['book', 'bookshelf'] as const;
export const METHODS = ['create', 'list', 'delete', 'update'] as const;
export type ACTION_STR = `${typeof ENTITIES[number]}:${typeof METHODS[number]}`;

export const ACTIONS: Record<ACTION_STR, AnyFN> = {
    "book:create": <T>(data: T) => {
        console.log(data);
    },
    "book:delete": () => { },
    "book:list": () => { },
    "book:update": () => { },

    "bookshelf:create": <T extends string[]>(data: T) => {
        const bookshelf = new Bookshelf(...data);
        bookshelf.create();
    },
    "bookshelf:delete": () => { },
    "bookshelf:list": async () => {
        const bookshelf = new Bookshelf();
        const data = await bookshelf.list();
        console.table(data); 
    },
    "bookshelf:update": () => { },
}




