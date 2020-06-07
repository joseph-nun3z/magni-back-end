import { makeRoute, makeUser } from '../entities';

export default function makeGenerateRoute({ database, aiService }) {
    return async function generateRoute(route, userId) {
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
