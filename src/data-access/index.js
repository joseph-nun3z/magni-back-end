import mongodb from 'mongodb';
import makeUserDb from "./userDb";
import dotenv from 'dotenv';
dotenv.config();


const MongoClient = mongodb.MongoClient;
const url = process.env.DB_CONNECTION
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export async function makeDb() {
    if(!client.isConnected()) {
        await client.connect();
    }
    return client.db()
}