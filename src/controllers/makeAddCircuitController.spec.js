import makeAddCircuitController from './makeAddCircuitController';
import makeFakeCircuit from '../../__test__/fixtures/circuit';

describe('add circuit controller', () => {
    it('successfully add a circuit', async () => {
        const addCircuitController = makeAddCircuitController({ addCircuit: (c) => c });
        const circuit = makeFakeCircuit();
        const request = {
            headers: { 'Content-Type': 'application/json' },
            params: { user: circuit.user },
            body: circuit
        };
        const expected = {
            headers: { 'Content-Type': 'application/json' },
            statusCode: 200,
            body: { id: circuit.id }
        };
        const actual = await addCircuitController(request);
        expect(actual).toEqual(expected);
    });
    it('reports user errors.', async () => {
        const addCircuitController = makeAddCircuitController({
            addCircuit: () => {
                throw Error('User error.');
            }
        });
        const circuit = makeFakeCircuit();
        const request = {
            headers: { 'Content-Type': 'application/json' },
            params: { user: circuit.user },
            body: circuit
        };
        const expected = {
            headers: { 'Content-Type': 'application/json' },
            statusCode: 400,
            body: { error: 'User error.' }
        };
        const actual = await addCircuitController(request);
        expect(actual).toEqual(expected);
    });
});
