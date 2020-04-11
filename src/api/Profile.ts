export const getLogin = () => {
    return {
        apiPath: `api/userinfo`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}