export default function makeUpdateRunController({ updateRun }) {
    return async function updateRunController(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };
        try {
            const { userId, circuitId, actualTime } = httpRequest.body;
            const run = await updateRun({ userId, circuitId, actualTime });
            return  {
                headers,
                statusCode: run.nModified > 0 ? 200 : 500
            };
        } catch (e) {
            console.log(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            };
        }
    };
}