import { makeUser } from '../entities';

export default function makeAddUser({ userDb }) {
    return async function addUser(userInfo) {
        const mUser = makeUser(userInfo);
        const exists = await userDb.findById({ id: userInfo.id });
        if (exists) {
            return exists;
        }
        return await userDb.insert({
            _id: mUser.getId(),
            username: mUser.getUsername(),
            email: mUser.getEmail(),
            circuits: mUser.getCircuits()
        });
    };
}
