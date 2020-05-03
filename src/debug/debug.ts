import config from '../site-config.json';

export const panelCtrl = () => {
    if (config.debug === "true") {
        if (config.AdminMode === "true") {
            return true
        }
    }
    return false
}


