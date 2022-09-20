import emitter from "./emitter";

const ENTITIES = ['book', 'bookshelf'] as const;
const METHODS = ['create', 'list', 'delete', 'update'] as const;
type ACTION_STR = `${typeof ENTITIES[number]}:${typeof METHODS[number]}`;

export const ACTIONS: Record<ACTION_STR, any> = {
    "book:create": () => {
        console.log('oi');
    },
    "book:delete": () => { },
    "book:list": () => { },
    "book:update": () => { },
    "bookshelf:create": () => { },
    "bookshelf:delete": () => { },
    "bookshelf:list": () => { },
    "bookshelf:update": () => { },
}

emitter.on("event", (evt: string) => {
    if (evt in ACTIONS) {
        ACTIONS[evt];
    }
});




