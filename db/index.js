import dotenv from 'dotenv';
import { makeDb } from '../src/data-access';

dotenv.config();
(async function setupDb() {
    console.log('Setting up database...');
    const db = await makeDb();
    const userResult = await db
        .collection('users')
        .createIndexes([{ key: { email: 1 }, unique: true }]);
    console.log(userResult.note);
    console.log('Database setup complete...');
    process.exit();
}());
