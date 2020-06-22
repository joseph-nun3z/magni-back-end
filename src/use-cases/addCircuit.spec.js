import makeAddCircuit from './add-circuit';
import makeUserDb from '../data-access/userDb';
import makeFakeCircuit from '../../__test__/fixtures/circuit';
import buildConnection from '../../__test__/fixtures/Db';
import makeFakeUser from '../../__test__/fixtures/user';

describe('add circuit', () => {
    const { makeDb, closeDb } = buildConnection();
    let userDb;
    beforeAll(() => {
        userDb = makeUserDb({ makeDb });
    });
    afterAll(async () => await closeDb());
    it('inserts circuit in database', async () => {
        const fakeUser = await userDb.insert(makeFakeUser());
        const newCircuit = makeFakeCircuit({ user: fakeUser.id });
        const addCircuit = makeAddCircuit({ userDb });
        const inserted = await addCircuit(newCircuit);
        expect(inserted).toMatchObject(newCircuit);
    });
});
