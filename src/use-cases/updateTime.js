export default function makeUpdateTime({ userDb }) {
    return async function updateTime({
        _id, runId, actualTime
    }) {
        if (!_id) {
            throw new Error('You must provide circuit id');
        }
        if (!actualTime) {
            throw new Error('You must provide actual time');
        }
        return await userDb.updateTime({
            id: _id,
            runId,
            actualTime
        });
    };
}
