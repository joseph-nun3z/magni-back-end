export default function buildMakeRoute() {
    return function makePoint({
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
            getdate: () => date,
            getPoints: () => points,
            getExpectedTime: () => expectedTime,
            getActualTime: () => actualTime
        });
    };
}
