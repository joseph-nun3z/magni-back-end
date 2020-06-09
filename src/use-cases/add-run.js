import { makeRun } from '../entities';

export default function makeAddRun({ userDb }) {
    return async function addRun({
        userId, circuitId, run, generatePoints
    }) {
        if (!circuitId) {
            throw new Error('You must provide circuit id');
        }
        if (!userId) {
            throw new Error('You must provide user id');
        }
        const user = userDb.findById(userId);
        const circuit = user.getCircuit(circuitId);
        const mPoints = generatePoints(circuit);
        const mRun = makeRun({
            expectedTime: run.expectedTime,
            points: mPoints
        });

        if (circuit && run.points[0] !== circuit.getInitialPoint()) {
            throw new Error('initial point does not coincide');
        }
        return await userDb.addRun({
            run: {
                date: mRun.getDate(),
                expectedTime: mRun.expectedTime(),
                points: mRun.getPoints()
            }
        });
    };
}
