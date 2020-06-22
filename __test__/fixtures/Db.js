import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient } from 'mongodb';


export default function buildConnection() {
    const mongod = new MongoMemoryServer();
    let con;
    async function makeDb() {
        const url = await mongod.getUri();
        con = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return con.db(await mongod.getDbName());
    }
    async function closeDb() {
        if (con) con.close();
        if (mongod) await mongod.stop();
    }
    return Object.freeze({ makeDb, closeDb });
}
