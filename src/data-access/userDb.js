export default function makeUserDb({ makeDb }) {
    async function findById({ id: _id }) {
        const db = await makeDb();
        return await db.collection('users').findOne({ _id });
    }
    async function findCircuitById({ id: _id }) {
        const db = await makeDb();
        return await db.collection('circuits').findOne({ _id });
    }
    async function addRun({ _id, run }) {
        const db = await makeDb();
        const updated = await db
            .collection('circuits')
            .updateOne(
                { _id },
                { $push: { runs: { ...run } } },
                { returnOriginal: false }
            );
        return updated.result;
    }
    async function pushCircuit(_id, circuitId) {
        const db = await makeDb();
        await db
            .collection('users')
            .updateOne(
                { _id },
                { $push: { circuits: circuitId } }
            );
    }
    async function addCircuit({ id: _id, ...circuitInfo }) {
        const db = await makeDb();
        const result = await db
            .collection('circuits')
            .insertOne({ _id, ...circuitInfo });
        const { _id: id, ...insertedInfo } = result.ops[0];
        // eslint-disable-next-line no-underscore-dangle
        await pushCircuit(circuitInfo.user, circuitInfo._id);
        return { id, ...insertedInfo };
    }
    async function insert({ id: _id, ...userInfo }) {
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
    async function updateTime({ _id, runId, actualTime }) {
        const db = await makeDb();
        return await db
            .collection('circuits')
            .findOneAndUpdate(
                { _id, 'runs.runId': runId },
                { $set: { 'runs.$.actualTime': actualTime } },
                { returnOriginal: false }
            );
    }
    return Object.freeze({
        findById,
        addCircuit,
        addRun,
        findCircuitById,
        updateTime,
        insert,
        update
    });
}
