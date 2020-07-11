import { makeRun } from '../entities';

export default function makeAddRun({ userDb, generatePoints }) {
    return async function addRun(_id, runInfo) {
        if (!_id) {
            throw new Error('You must provide circuit id');
        }
        const circuit = await userDb.findCircuitById({ id: _id });
        if (!circuit) {
            throw new Error('Circuit not found');
        }
        // TODO const mPoints = generatePoints(circuit);
        const mRun = await makeRun(runInfo);
        return userDb.addRun({
            run: {
                runId: mRun.getId(),
                date: mRun.getDate(),
                actualTime: mRun.getActualTime(),
                expectedTime: mRun.getExpectedTime(),
                points: mRun.getPoints()
            },
            id: _id
        });
    };
}
