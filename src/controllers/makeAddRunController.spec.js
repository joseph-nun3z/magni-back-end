import makeAddRunController from './makeAddRunController';
import makeFakeRun from '../../__test__/fixtures/run';
import makeFakeCircuit from '../../__test__/fixtures/circuit';

describe('add run controller', () => {
    it('successfully adds a run', async () => {
        const addRunController = makeAddRunController({ addRun: () => ({ nModified: 1 }) });
        const run = makeFakeRun();
        const circuit = makeFakeCircuit();
        const request = {
            headers: { 'Content-Type': 'application/json' },
            params: { id: circuit.id },
            body: { expectedTime: run.expectedTime }
        };
        const expected = {
            headers: { 'Content-Type': 'application/json' },
            statusCode: 200
        };
        const actual = await addRunController(request);
        expect(actual).toEqual(expected);
    });
    it('reports user errors', async () => {
        const addRunController = makeAddRunController({
            addRun: () => {
                throw Error('User error.');
            }
        });
        const run = makeFakeRun();
        const circuit = makeFakeCircuit();
        const request = {
            headers: { 'Content-Type': 'application/json' },
            params: { id: circuit.id },
            body: { expectedTime: run.expectedTime }
        };
        const expected = {
            headers: { 'Content-Type': 'application/json' },
            statusCode: 400,
            body: { error: 'User error.' }
        };
        const actual = await addRunController(request);
        expect(actual).toEqual(expected);
    });
});
