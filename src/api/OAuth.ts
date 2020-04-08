export const getLogin = (user: string, psw: string) => {
    let formdata = new FormData();
    formdata.append("username", user);
    formdata.append("password", psw);
    return {
        apiPath: `admin/login`,
        request: {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: formdata,
        }
    }
}