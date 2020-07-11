import makeAddRun from './addRun';
import makeUserDb from '../data-access/userDb';
import makeFakeCircuit from '../../__test__/fixtures/circuit';
import makeFakeRun from '../../__test__/fixtures/run';
import buildConnection from '../../__test__/fixtures/Db';

describe('add run', () => {
    const { makeDb, closeDb } = buildConnection();
    let userDb;
    beforeAll(() => {
        userDb = makeUserDb({ makeDb });
    });
    afterAll(async () => await closeDb());
    it('inserts a run in database', async () => {
        let fakeCircuit = makeFakeCircuit();
        fakeCircuit = await userDb.addCircuit(fakeCircuit);
        const newRun = makeFakeRun();
        const addRun = makeAddRun({ userDb });
        const inserted = await addRun(fakeCircuit.id, newRun);
        expect(inserted.nModified).toEqual(1);
    });
});
