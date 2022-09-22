import { Database } from "bun:sqlite";
import { database_file } from "./config";
import { ACTIONS, ACTION_STR } from "./app";
import { AnyFN } from "./utils";
import "./app";

function start() {
    const [__, _, ...rest] = process.argv;
    const [entity, action, ...data] = rest;
    if (!entity || !action) throw new Error("todo");
    const act = `${entity}:${action}` as ACTION_STR;

    if (act in ACTIONS) {
        ACTIONS[act](data);
    }
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



