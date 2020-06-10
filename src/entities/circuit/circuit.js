export default function buildMakeCircuit({ Id, makeRun }) {
    return function makeCircuit({
        id = Id.makeId(),
        dateAdded = Date.now(),
        initialPoint,
        comment,
        runs = []
    } = {}) {
        if (!id) {
            throw new Error('User must have a valid id.');
        }
        if (!Id.isValidId(id)) {
            throw new Error('Circuit must have a valid id');
        }
        if (!initialPoint) {
            throw new Error('Circuit must have an initial point');
        }
        const validRuns = makeRun(runs);
        return Object.freeze({
            getId: () => id,
            getInitialPoint: () => initialPoint,
            getRuns: () => validRuns,
            getDateAdded: () => dateAdded,
            getComment: () => comment
        });
    };
}
