export default function makeAddRunController({ addRun }) {
    return async function addRunController(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const { ...runInfo } = httpRequest.body;
            const { _id } = httpRequest.params;

            const mRun = await addRun(_id, { ...runInfo });

            return {
                headers,
                statusCode: mRun.nModified > 0 ? 200 : 500
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
