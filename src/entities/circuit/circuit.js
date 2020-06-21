export default function buildMakeCircuit({ Id }) {
    return function makeCircuit({
        id = Id.makeId(),
        user,
        dateAdded = Date.now(),
        initialPoint,
        comment,
        runs = []
    } = {}) {
        if (!id || !Id.isValidId(id)) {
            throw new Error('Circuit must have a valid id.');
        }
        if (!initialPoint) {
            throw new Error('Circuit must have an initial point');
        }
        return Object.freeze({
            getId: () => id,
            getUser: () => user,
            getInitialPoint: () => initialPoint,
            getRuns: () => runs,
            getDateAdded: () => dateAdded,
            getComment: () => comment,
            getRunById: (runId) => runs.find((run) => run.id === runId)
        });
    };
}
