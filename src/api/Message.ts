const postMessage = (toid: string, topic: string, message: string, file: string) => {
    // 发送消息
    let formdata = new FormData();
    formdata.append("toid", toid);
    formdata.append("topic", topic);
    formdata.append("message", message);
    formdata.append("file", file);
    return {
        apiPath: `message/new`,
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

const listMessage = () => {
    // 获取消息列表
    return {
        apiPath: `message`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}

const viewMessage = (id: string) => {
    // 查看消息详情
    return {
        apiPath: `message/${id}`,
        request: {
            method: "GET",
            mode: 'no-cors',
        }
    }
}

// 站内信
export { postMessage, listMessage, viewMessage }