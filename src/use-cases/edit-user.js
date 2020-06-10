export default function makeEditUser({ userDb }) {
    return async function editUser({ id, ...changes }) {
        if (!id) {
            throw new Error('You must provide an user ID');
        }
        const exists = await userDb.findById({ id });
        if (!exists) {
            throw new Error('User does not exist');
        }
        return await userDb.update({ id, ...changes });
    };
}
