export default function makeAddCircuitController({ addCircuit }) {
    return async function addCircuitController(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const { ...circuitInfo } = httpRequest.body;
            const circuit = await addCircuit({ ...circuitInfo });
            return {
                headers,
                statusCode: circuit ? 200 : 500,
                body: {
                    id: circuit.id
                }
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
