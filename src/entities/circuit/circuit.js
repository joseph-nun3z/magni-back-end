export default function buildMakeCircuit({ Id }) {
    return function makeCircuit({
        circuitId = Id.makeId(),
        dateAdded = Date.now(),
        initialPoint,
        comment,
        runs = []
    } = {}) {
        if (!circuitId) {
            throw new Error('User must have a valid id.');
        }
        if (!Id.isValidId(circuitId)) {
            throw new Error('Circuit must have a valid id');
        }
        if (!initialPoint) {
            throw new Error('Circuit must have an initial point');
        }
        // const validRuns = makeRun(runs);
        return Object.freeze({
            getId: () => circuitId,
            getInitialPoint: () => initialPoint,
            getRuns: () => runs,
            getDateAdded: () => dateAdded,
            getComment: () => comment
        });
    };
}
