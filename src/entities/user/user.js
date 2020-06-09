export default function buildMakeUser({ Id, makeCircuit }) {
    return function makeUser({
        id = Id.makeId(),
        userName,
        email,
        circuits = []
    } = {}) {
        if (!Id.isValidId(id)) {
            throw new Error('User must have a valid id.');
        }
        if (!userName) {
            throw new Error('User must have user name');
        }
        if (userName.length < 2) {
            throw new Error('Username must be longer than 2 characters.');
        }
        if (!email) {
            throw new Error('User must have an email');
        }

        const validCircuits = makeCircuit(circuits);

        return Object.freeze({
            getId: () => id,
            getUsername: () => userName,
            getEmail: () => email,
            getCircuits: () => validCircuits,
            getCircuit: (circuitId) => {
                validCircuits.find((c) => c.id === circuitId);
            }
        });
    };
}
