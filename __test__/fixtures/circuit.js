import faker from 'faker';
import cuid from 'cuid';

const Id = Object.freeze({
    makeId: cuid,
    isValidId: cuid.isCuid
});

export default function makeFakeCircuit(overrides) {
    const circuit = {
        id: Id.makeId(),
        user: Id.makeId(),
        dateAdded: Date.now(),
        initialPoint: '33MH+JH',
        comment: faker.lorem.sentence(),
        runs: []
    };
    return {
        ...circuit,
        ...overrides
    };
}
