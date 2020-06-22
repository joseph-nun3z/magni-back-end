export default function makeAddUserController({ addUser }) {
    return async function addUserController(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const { ...userInfo } = httpRequest.body;
            const user = await addUser({ ...userInfo });
            return {
                headers,
                statusCode: 200,
                body: { id: user.id }
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
