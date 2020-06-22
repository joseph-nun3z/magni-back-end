import { makeCircuit } from '../entities';

export default function makeAddCircuit({ userDb }) {
    return async function addCircuit({ circuit }) {
        if (!circuit.user) {
            throw new Error('You must provide the user id you want to add the circuit to');
        }
        const mCircuit = makeCircuit(circuit);
        const user = await userDb.findById({ id: circuit.user });
        if (!user) {
            throw new Error('User not found');
        }
        return userDb.addCircuit({
            _id: mCircuit.getId(),
            user: mCircuit.getUser(),
            dateAdded: mCircuit.getDateAdded(),
            initialPoint: mCircuit.getInitialPoint(),
            comment: mCircuit.getComment(),
            runs: mCircuit.getRuns()
        });
    };
}
