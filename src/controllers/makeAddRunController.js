export default function makeAddRunController({ addRun }) {
    return async function addRunController(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const { expectedTime } = httpRequest.body;
            const { userId, cId } = httpRequest.params;

            const run = await addRun({ userId, cId, run: { expectedTime } });

            return {
                headers,
                statusCode: run.nModified > 0 ? 200 : 500
            };
        }
        catch (e) {
            console.error(e);
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
