import faker from 'faker';
import cuid from 'cuid';

const Id = Object.freeze({
    makeId: cuid,
    isValidId: cuid.isCuid
});

export default function makeFakeUser(overrides) {
    const user = {
        id: Id.makeId(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        circuits: []
    };
    return {
        ...user,
        ...overrides
    };
}
