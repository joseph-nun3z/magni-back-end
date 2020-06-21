import makeCircuit from '../entities/circuit';
import circuit from '../entities/circuit/circuit';

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
        const exist = await userDb.findCircuitById({ id: _id });
        if (!exist) {
            throw new Error('User does not exist');
        }
        if (exist.runs.find((r) => r.runId === runId).actualTime) {
            throw new Error('Run already completed');
        }
        return await userDb.updateTime({
            _id,
            runId,
            actualTime
        });
    };
}
