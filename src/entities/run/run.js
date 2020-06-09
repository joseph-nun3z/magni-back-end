export default function buildMakeRun() {
    return function makeRun({
        date = Date.now(),
        expectedTime,
        actualTime,
        completed = false,
        points = []
    } = {}) {
        if (!expectedTime) {
            throw new Error('Run must have expected time');
        }
        if (!actualTime) {
            throw new Error('Run must have actual time');
        }
        return Object.freeze({
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
