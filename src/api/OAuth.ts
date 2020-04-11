export const getLogin = (user: string, psw: string) => {
    let formdata = new FormData();
    formdata.append("username", user);
    formdata.append("password", psw);
    return {
        apiPath: `api/login`,
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

export const resetPassword = (newpwd1: string, newpwd2: string) => {
    let formdata = new FormData();
    formdata.append("newpassword", newpwd1);
    formdata.append("newpasswordagain", newpwd2);
    return {
        apiPath: `api/resetpa`,
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