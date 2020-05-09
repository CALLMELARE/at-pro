const delReport = (user: string, id: string) => {
    // 删除周报
    return {
        apiPath: `weekly/${user}/${id}/delete`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}

const editReport = (user: string, id: string, content: string) => {
    // 修改周报
    let formdata = new FormData();
    formdata.append("report", content)
    return {
        apiPath: `weekly/${user}/${id}/edit`,
        request: {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: formdata
        }
    }
}

const viewReport = (user: string, id: string) => {
    // 查看周报详情
    return {
        apiPath: `weekly/${user}/${id}`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}

const newReport = (content: string) => {
    // 新建周报
    let formdata = new FormData();
    formdata.append("report", content)
    return {
        apiPath: `weekly/new`,
        request: {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: formdata
        }
    }
}

const myReport = () => {
    // 查看我的周报
    // 存在周报跳转至查看自己的最新周报，不存在周报跳转至新建周报
    return {
        apiPath: `weekly/myreport`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}

const overviewReport = () => {
    // 周报总览
    return {
        apiPath: `weekly`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}

const newRecord = (topic: string, content: string) => {
    // 新建日志
    let formdata = new FormData();
    formdata.append("topic", topic);
    formdata.append("record", content);
    return {
        apiPath: `record/new`,
        request: {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: formdata
        }
    }
}

const uploadRecord = (user: string, id: string) => {
    // 上传日志(公开已新建的日志)
    return {
        apiPath: `report/${user}/${id}/upload`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}

const updateRecord = (user: string, id: string, content: string) => {
    // 更新日志(更新已有日志)
    let formdata = new FormData();
    formdata.append("record", content);
    return {
        apiPath: `record/${user}/${id}/update`,
        request: {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: formdata
        }
    }
}

const viewRecord = (user: string, id: string) => {
    // 查看日志
    return {
        apiPath: `record/${user}/${id}`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}

const overviewRecord = () => {
    // 日志总览
    return {
        apiPath: `record`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}

const delRecord = (user: string, id: string) => {
    // 删除日志
    return {
        apiPath: `record/${user}/${id}/delete`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}

// 周报系统
export { delReport, editReport, viewReport, newReport, myReport, overviewReport }
// 日志系统
export { delRecord,viewRecord, uploadRecord, updateRecord, newRecord, overviewRecord }