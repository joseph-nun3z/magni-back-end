export default function buildMakeRun({ Id }) {
    return function makeRun({
        id = Id.makeId(),
        date = Date.now(),
        expectedTime,
        actualTime,
        completed = false,
        points = []
    } = {}) {
        if (!id) {
            throw new Error('User must have a valid id.');
        }
        if (!Id.isValidId(id)) {
            throw new Error('Circuit must have a valid id');
        }
        if (!expectedTime) {
            throw new Error('Run must have expected time');
        }
        return Object.freeze({
            getId: () => id,
            getDate: () => date,
            getActualTime: () => actualTime,
            getExpectedTime: () => expectedTime,
            isCompleted: () => completed,
            completeRun: () => {
                completed = true;
            },
            getPoints: () => points
        });
    };
}
