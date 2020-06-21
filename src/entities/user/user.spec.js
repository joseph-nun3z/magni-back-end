import makeFakeUser from '../../../__test__/fixtures/user';
import makeUser from '.';

describe('user', () => {
    it('must have username', () => {
        const user = makeFakeUser({ username: null });
        expect(() => makeUser(user)).toThrow('User must have user name');
    });

    it('must have email', () => {
        const user = makeFakeUser({ email: null });
        expect(() => makeUser(user)).toThrow('User must have an email');
    });

    it('must have a valid id', () => {
        const user = makeFakeUser({ id: null });
        expect(() => makeUser(user)).toThrow('User must have a valid id.');
    });

    it('can have an id', () => {
        const user = makeFakeUser({ id: 'invalid' });
        expect(() => makeUser(user)).toThrow('User must have a valid id.');
        const noId = makeFakeUser({ id: undefined });
        expect(() => makeUser(noId)).not.toThrow();
    });
});
