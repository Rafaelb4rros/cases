import { join } from "node:path";

const currentDir = import.meta.dir;
const database_file = join(currentDir, './db.sqlite');

export {
    database_file,
    currentDir
}
