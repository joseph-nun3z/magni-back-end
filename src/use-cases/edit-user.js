import { makeUser } from '../entities';

export default function makeEditUser({ userDatabase }) {
    return async function editUser({ id, ...changes } = {}) {
        if (!id) {
            throw new Error('You must supply an id.');
        }

        const existing = await userDatabase.findById({ id });

        if (!existing) {
            throw new RangeError('User not found');
        }
        const user = makeUser({ ...existing, ...changes });
        const updated = await userDatabase.update({
            id: user.getId(),
            userName: user.getUsername(),
            email: user.getEmail

        });
        return { ...existing, ...updated };
    };
}
