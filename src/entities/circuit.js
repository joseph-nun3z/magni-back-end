export default function buildMakeCircuit() {
    return function makeCircuit({
        initialPoint,
        date = Date.now(),
        points,
        expectedTime,
        actualTime
    } = {}) {
        if (!initialPoint) {
            throw new Error('Route must have an initial point');
        }
        if (!expectedTime) {
            throw new Error('Route must have expected time');
        }

        return Object.freeze({
            getInitialPoint: () => initialPoint,
            getDate: () => date,
            getPoints: () => points,
            getExpectedTime: () => expectedTime,
            getActualTime: () => actualTime
        });
    };
}
