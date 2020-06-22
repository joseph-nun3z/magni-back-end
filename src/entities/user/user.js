export default function buildMakeUser({ Id }) {
    return function makeUser({
        id = Id.makeId(),
        username,
        email,
        circuits = []
    } = {}) {
        if (!Id.isValidId(id)) {
            throw new Error('User must have a valid id.');
        }
        if (!username) {
            throw new Error('User must have user name');
        }
        if (username.length < 2) {
            throw new Error('Username must be longer than 2 characters.');
        }
        if (!email) {
            throw new Error('User must have an email');
        }

        return Object.freeze({
            getId: () => id,
            getUsername: () => username,
            getEmail: () => email,
            getCircuits: () => circuits,
            getCircuit: (circuitId) => {
                circuits.find((circuit) => circuit.id === circuitId);
            }
        });
    };
}
