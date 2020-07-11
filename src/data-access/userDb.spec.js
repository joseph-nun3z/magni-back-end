import buildConnection from '../../__test__/fixtures/Db';
import makeUserDb from './userDb';
import makeFakeUser from '../../__test__/fixtures/user';
import makeFakeRun from '../../__test__/fixtures/run';
import makeFakeCircuit from '../../__test__/fixtures/circuit';

describe('users db', () => {
    const { makeDb, closeDb } = buildConnection();
    let userDb;
    beforeAll(() => {
        userDb = makeUserDb({ makeDb });
    });
    afterAll(async () => await closeDb());
    it('finds a user by id', async () => {
        const user = makeFakeUser();
        await userDb.insert(user);
        const found = await userDb.findById(user);
        expect(found.email).toEqual(user.email);
    });
    it('finds a circuit by id', async () => {
        const circuit = makeFakeCircuit();
        await userDb.addCircuit(circuit);
        const found = await userDb.findCircuitById(circuit);
        expect(found.comment).toEqual(circuit.comment);
    });
    it('inserts a circuit', async () => {
        const circuit = makeFakeCircuit();
        const result = await userDb.addCircuit(circuit);
        expect(result).toMatchObject(circuit);
    });
    it('inserts a run', async () => {
        const run = makeFakeRun();
        const circuit = await userDb.addCircuit(makeFakeCircuit());
        const result = await userDb.addRun(circuit, run);
        expect(result.nModified).toEqual(1);
    });
});
