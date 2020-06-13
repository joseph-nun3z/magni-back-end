import { makeRun, makeUser } from '../entities';

export default function makeAddRun({ userDb, generatePoints }) {
    return async function addRun({
        userId, cId, run
    }) {
        if (!cId) {
            throw new Error('You must provide circuit id');
        }
        if (!userId) {
            throw new Error('You must provide user id');
        }
        let user = await userDb.findById({ id: userId });
        user = await makeUser(user);
        const circuit = user.getCircuit(cId);
        // const mPoints = generatePoints(circuit);
        const mRun = await makeRun({
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
