import { makeUser } from '../entities';

export default function makeAddUser({ userDb }) {
    return async function addUser({ user }) {
        const mUser = makeUser(user);
        const exists = await userDb.findById({ id: user.id });
        if (exists) {
            console.log(exists);
            return exists;
        }

        return userDb.insert({
            userName: mUser.getUsername(),
            email: mUser.getEmail()
        });
    };
}
