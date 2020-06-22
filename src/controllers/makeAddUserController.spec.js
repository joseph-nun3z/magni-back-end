import makeAddUserController from './makeAddUserController';
import makeFakeUser from '../../__test__/fixtures/user';

describe('Add user controller.', () => {
    it('successfully add a new user.', async () => {
        const addUserController = makeAddUserController({ addUser: (u) => u });
        const user = makeFakeUser();
        const request = {
            headers: { 'Content-Type': 'application/json' },
            body: user
        };
        const expected = {
            headers: { 'Content-Type': 'application/json' },
            statusCode: 200,
            body: { id: user.id }
        };
        const actual = await addUserController(request);
        expect(actual).toEqual(expected);
    });
    it('reports user errors', async () => {
        const addUserController = makeAddUserController({
            addUser: () => {
                throw Error('User error.');
            }
        });
        const user = makeFakeUser();
        const request = {
            headers: { 'Content-Type': 'application/json' },
            body: user
        };
        const expected = {
            headers: { 'Content-Type': 'application/json' },
            statusCode: 400,
            body: { error: 'User error.' }
        };
        const actual = await addUserController(request);
        expect(actual).toEqual(expected);
    });
});
