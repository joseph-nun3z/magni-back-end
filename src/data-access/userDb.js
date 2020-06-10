export default function makeUserDb({ makeDb }) {
    return Object.freeze({
        findById,
        addCircuit,
        updateRun,
        update
    });
    async function findById({ id: _id }) {
        const db = await makeDb();
        return await db.collection('users').find({ _id });
    }
    async function addCircuit({ id: _id, circuit }) {
        const db = await makeDb();
        const updated = await db
            .collection('users')
            .updateOne(
                { _id },
                { $push: { circuits: { ...circuit } } },
                { returnOriginal: false }
            );
        return updated.result;
    }
    async function updateRun({
        userId, circuitId, runId, expectedTime
    }) {
        /*
            const db = await makeDb();
            const user = await db.collection('users').findOneAndUpdate(
                { "_id": userId, "circuits._id": circuitId, "run._id": runId }),
                {
                    "$set":{
                        "runs.$.expectedTime": expectedTime
                    }
                }
         */
    }
    async function update({ id: _id, ...changes }) {
        const db = await makeDb();
        const result = await db
            .collection('users')
            .findOneAndUpdate(
                { _id },
                { $set: { ...changes } },
                { returnOriginal: false }
            );
        return result.value;
    }
}
