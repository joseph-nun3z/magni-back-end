import { makeCircuit, makeUser } from '../entities';

export default function makeGenerateCircuit({ database, aiService }) {
    return async function generateCircuit(route, userId) {
        if (!userId) {
            throw new Error('You must supply an user id.');
        }
        if (!route) {
            throw new Error('You must supply a route.');
        }

        const user = await database.findById({ userId });

        if (!user) {
            throw new RangeError('User not found.');
        }

        const runs = user.getRuns();
    };
}
