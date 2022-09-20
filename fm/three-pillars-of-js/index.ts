import { Database } from "bun:sqlite";
import { database_file } from "./config";
import emitter from "./emitter";

import "./app";

function start() {
    const [_idontcare, _, ...rest] = process.argv;
    const [entity, action] = rest;
    if(!entity || !action) throw new Error("todo");
    emitter.emit('event', `${entity}:${action}`);
}

async function getDatabase(): Promise<(Database | undefined)> {
    try {
        const db = Database.open(database_file);
        console.warn('database opened!');
        return db;
    } catch (err) {
        return undefined;
    }
}
type AnyFN = (...args: any[]) => any;
const PromiseWrap = (fn: AnyFN): Promise<boolean> => Promise.resolve(fn());

async function queryRunner(queryString: string, args?: string[]) {
    const db = await getDatabase();
    if (!db) throw new Error('Cannot open database file');
    const query = db.prepare(queryString);

    if (!args) {
        return query.all();
    }

    try {
        return await PromiseWrap(() => query.all(...args));
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        query.finalize();
        db.close();
    }
}


start();
export {
    queryRunner,
}



