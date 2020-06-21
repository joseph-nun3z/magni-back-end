import { makeRun } from '../entities';

export default function makeAddRun({ userDb, generatePoints }) {
    return async function addRun({
        _id, run
    }) {
        if (!_id) {
            throw new Error('You must provide circuit id');
        }
        const circuit = await userDb.findCircuitById({ id: _id });
        if (!circuit) {
            throw new Error('Circuit not found');
        }
        // TODO const mPoints = generatePoints(circuit);
        const mRun = await makeRun({
            expectedTime: run.expectedTime
            // TODO points: mPoints
        });
        return await userDb.addRun({
            run: {
                runId: mRun.getId(),
                date: mRun.getDate(),
                actualTime: mRun.getActualTime(),
                expectedTime: mRun.getExpectedTime(),
                points: mRun.getPoints()
            },
            _id
        });
    };
}
