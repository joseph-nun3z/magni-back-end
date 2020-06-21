import { makeUser } from '../entities';

export default function makeAddUser({ userDb }) {
    return async function addUser({ user }) {
        const mUser = makeUser(user);
        const exists = await userDb.findById({ id: user.id });
        if (exists) {
            return exists;
        }
        return await userDb.insert({
            userName: mUser.getUsername(),
            email: mUser.getEmail()
        });
    };
}
