export default function buildMakeRun({ Id }) {
    return function makeRun({
        runId = Id.makeId(),
        date = Date.now(),
        expectedTime,
        actualTime,
        points = []
    } = {}) {
        if (!runId) {
            throw new Error('Run must have a valid id.');
        }
        if (!Id.isValidId(runId)) {
            throw new Error('Circuit must have a valid id');
        }
        if (!expectedTime) {
            throw new Error('Run must have expected time');
        }
        return Object.freeze({
            getId: () => runId,
            getDate: () => date,
            getActualTime: () => actualTime,
            getExpectedTime: () => expectedTime,
            getPoints: () => points
        });
    };
}
