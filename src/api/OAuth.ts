const getLogin = (user: string, psw: string) => {
    let formdata = new FormData();
    formdata.append("username", user);
    formdata.append("password", psw);
    return {
        apiPath: `login`,
        request: {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Authorization": "token",
                "Content-Type": "application/json",
            },
            body: formdata,
        }
    }
}

const getLogout = () => {
    return {
        apiPath: `logout`,
        request: {
            method: "GET",
            mode: 'no-cors',
            credentials: 'include'
        }
    }
}

const resetPassword = (newpwd1: string, newpwd2: string) => {
    let formdata = new FormData();
    formdata.append("newpassword", newpwd1);
    formdata.append("newpasswordagain", newpwd2);
    return {
        apiPath: `resetpa`,
        request: {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Authorization": "token",
                "Content-Type": "application/json",
            },
            body: formdata,
            credentials: 'include'
        }
    }
}

export { getLogin, getLogout, resetPassword }