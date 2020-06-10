export default function makeAddUserController({ addUser }) {
    return async function addUserController(httpRequest) {
        const headers = {
            "Content Type": "application/json"
        };
        try {
            const { userName, email } = httpRequest.body;
            const id = httpRequest.params.id;

            const user = await addUser({ id, user: { userName, email }});

            return {
                headers,
                statusCode: user.nModified > 0 ? 200 : 500
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
    }
}