export default function makeUpdateRunController({ updateTime }) {
    return async function updateRunController(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const { _id, runId } = httpRequest.params;
            const { actualTime } = httpRequest.body;

            const run = await updateTime({
                _id, runId, actualTime
            });

            return {
                headers,
                statusCode: run ? 200 : 500
            };
        }
        catch (e) {
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
