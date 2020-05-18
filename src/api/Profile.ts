export const userinfo = () => {
    // 用户基本信息
    return {
        apiPath: `user/myinfo`,
        request: {
            method: "GET",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
        }
    }
}