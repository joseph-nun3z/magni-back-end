import faker from 'faker';
import cuid from 'cuid';

const Id = Object.freeze({
    makeId: cuid,
    isValidId: cuid.isCuid
});

export default function makeFakeRun(overrides) {
    const run = {
        runId: Id.makeId(),
        date: Date.now(),
        actualTime: null,
        expectedTime: faker.random.number(),
        points: ['33MH+JH', '33MH+JH', '33MH+JH', '33MH+JH']
    };
    return {
        ...run,
        ...overrides
    };
}
