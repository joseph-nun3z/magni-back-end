import makeFakeCircuit from '../../../__test__/fixtures/circuit';
import makeCircuit from '.';

describe('circuit', () => {
    it('must have a valid id', () => {
        const circuit = makeFakeCircuit({ id: null });
        expect(() => makeCircuit(circuit)).toThrow('Circuit must have a valid id.');
    });
    it('must have an initial point.', () => {
        const circuit = makeFakeCircuit({ initialPoint: null });
        expect(() => makeCircuit(circuit)).toThrow('Circuit must have an initial point');
    });
    it('can have an id', () => {
        const circuit = makeFakeCircuit({ id: 'invalid' });
        expect(() => makeCircuit(circuit)).toThrow('Circuit must have a valid id.');
        const noId = makeFakeCircuit({ id: undefined });
        expect(() => makeCircuit(noId)).not.toThrow();
    });
});
