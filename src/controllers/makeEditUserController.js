export default function makeEditUserController({ editUser }) {
    return async function editUserController(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };
        try {
            const { name, email } = httpRequest.body;
            const id = httpRequest.params.id;
            const user = await editUser({ id, name, email });
            return {
                headers,
                statusCode: 200,
                body: {
                    id: user.getId()
                }
            };
        }catch (e) {
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