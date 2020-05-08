import config from '../site-config.json';

const debug = config.debug;
const settings = config.debugSettings

const panelCtrl = () => {
    // 用户端/后台布局切换
    if (debug === "true") {
        if (settings.AdminMode === "true") {
            return true
        }
    }
    return false
}

const bypassLogin = () => {
    // 跳过登录界面
    if (debug === "true") {
        if (settings.BypassLogin === "true") {
            return true
        }
    }
    return false
}

export { panelCtrl, bypassLogin }