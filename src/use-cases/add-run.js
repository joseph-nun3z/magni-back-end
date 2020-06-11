import { makeRun } from '../entities';

export default function makeAddRun({ userDb, generatePoints }) {
    return async function addRun({
        userId, circuitId, run
    }) {
        if (!circuitId) {
            throw new Error('You must provide circuit id');
        }
        if (!userId) {
            throw new Error('You must provide user id');
        }
        const user = await userDb.findById({ id: userId });
        const circuit = user.circuits[circuitId];
        // const mPoints = generatePoints(circuit);
        const mRun = makeRun({
            expectedTime: run.expectedTime
            //  points: mPoints
        });

        if (circuit && run.points[0] !== circuit.getInitialPoint()) {
            throw new Error('initial point does not coincide');
        }
        return await userDb.addRun({
            run: {
                id: mRun.getId(),
                date: mRun.getDate(),
                actualTime: mRun.getActualTime(),
                expectedTime: mRun.expectedTime,
                points: mRun.getPoints()
            }
        });
    };
}
