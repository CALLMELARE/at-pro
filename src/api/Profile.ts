export const userinfo = () => {
    return {
        apiPath: `user/myinfo`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}