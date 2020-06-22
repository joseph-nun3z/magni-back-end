import makeAddUser from './add-user';
import makeUserDb from '../data-access/userDb';
import makeFakeUser from '../../__test__/fixtures/user';
import buildConnection from '../../__test__/fixtures/Db';

describe('add user', () => {
    const { makeDb, closeDb } = buildConnection();
    let userDb;
    beforeAll(() => {
        userDb = makeUserDb({ makeDb });
    });
    afterAll(async () => await closeDb());
    it('inserts user in the database', async () => {
        const newUser = makeFakeUser();
        const addUser = makeAddUser({ userDb });
        const inserted = await addUser(newUser);
        expect(inserted).toMatchObject(newUser);
    });
});
