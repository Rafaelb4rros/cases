import { Database } from "bun:sqlite";
import { database_file } from "./config";


async function getDatabase(): Promise<(Database | undefined)> {
    try {
        const db = Database.open(database_file);
        return db;
    } catch (err) {
        return undefined;
    }
}


function parseQueryString(queryString: string, argsArr: any[]): string {
    if(!argsArr.length) return queryString;
    const rgx = /\$(\d)/g;
    let out = "";
    const matchArr = rgx.exec(queryString);

    if (matchArr) {
        const [match, arg] = [...matchArr];
        const valueToReplace = argsArr[Number(arg) - 1];
        out = queryString.replace(match, valueToReplace);
    }
    return out;
}


async function queryRunner<T extends any[]>(..._: T) {
    const [queryString, ...rest] = Array.from(arguments);
    const db = await getDatabase();
    if (!db) throw new Error('Cannot open database file');
    const query = parseQueryString(queryString, rest);

    try {
        const result = db.query(query);
        console.log('success', query);
        return result.all();
    } catch (err) {
        throw new Error(String(err));
    } finally {
        db.close();
    }

}

export {
    queryRunner
}






