export default function makeAddCircuitController({ addCircuit }) {
    return async function addCircuitController(httpRequest) {
        const headers = {
            'Content Type': 'application/json'
        };
        try {
            const { initialPoint, comment } = httpRequest.body;
            const { id } = httpRequest.params;

            const circuit = await addCircuit({ id, circuit: { initialPoint, comment } });

            return {
                headers,
                statusCode: circuit.nModified > 0 ? 200 : 500
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
