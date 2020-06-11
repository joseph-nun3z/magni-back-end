import Id from '../Id';

export default function makeUserDb({ makeDb }) {
    async function findById({ id: _id }) {
        const db = await makeDb();
        return await db.collection('users').findOne({ _id });
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
    async function insert({ id: _id = Id.makeId(), ...userInfo }) {
        console.log('########################## HERE ####################################');
        const db = await makeDb();
        const result = await db
            .collection('users')
            .insertOne({ _id, ...userInfo });
        const { _id: id, ...insertedInfo } = result.ops[0];
        return { id, ...insertedInfo };
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
    return Object.freeze({
        findById,
        addCircuit,
        updateRun,
        insert,
        update
    });
}
