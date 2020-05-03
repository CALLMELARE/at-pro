export const userinfo = () => {
    return {
        apiPath: `api/user/myinfo`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}