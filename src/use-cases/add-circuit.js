import { makeCircuit } from '../entities';

export default function makeAddCircuit({ userDb }) {
    return async function addCircuit({ id, circuit }) {
        if (!id) {
            throw new Error('You must provide the user id you want to add the circuit to');
        }
        const mCircuit = makeCircuit({
            initialPoint: circuit.initialPoint,
            comment: circuit.comment,
            runs: circuit.runs
        });
        const user = await userDb.findById({ id });
        if (!user) {
            throw new Error('User not found');
        }
        return await userDb.addCircuit({
            circuit: {
                circuitId: mCircuit.getId(),
                dateAdded: mCircuit.getDateAdded(),
                initialPoint: mCircuit.getInitialPoint(),
                comment: mCircuit.getComment(),
                runs: mCircuit.getRuns()
            },
            id
        });
    };
}
