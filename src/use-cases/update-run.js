export default function makeUpdateRun({ userDb }) {
    return async function updateRun({ userId, circuitId, actualTime }) {
        if (!circuitId) {
            throw new Error('You must provide circuit id');
        }
        if (!userId) {
            throw new Error('You must provide user id');
        }
        if (!actualTime) {
            throw new Error('You must provide actual time');
        }
        const exist = await userDb.findById({ userId });
        if (!exist) {
            throw new Error('User does not exist');
        }
        return await userDb.updateRun({
            userId,
            circuitId,
            actualTime
        });
    };
}
