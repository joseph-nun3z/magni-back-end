import { makeUser } from '../entities';

export default function makeAddUser({ userDatabase }) {
    return async function addUser(userInfo) {
        const user = makeUser(userInfo);
        const exists = await userDatabase.findById({ id: user.getId() });
        if (exists) {
            return exists;
        }

        return userDatabase.insert({
            userName: user.getUsername(),
            email: user.getEmail()
        });
    };
}
