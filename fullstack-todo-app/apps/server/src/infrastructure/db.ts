import { Pool, Client} from "pg";


const options = {};

export async function tryGetClient() {
    const makeClient = async () => await new Client(options).connect();
    return makeClient();
};

function databaseConn() {
};

const config = { 
    
};
