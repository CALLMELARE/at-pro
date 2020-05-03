import config from '../site-config.json';

const lack = "错误：site-config.json中缺少";
const lackTip = "未知";

export const org = () => {
    if (config.org) {
        return config.org
    } else {
        console.log(lack + "org<string>字段");
        return lackTip
    }
}

export const orgInShort = () => {
    if (config.orgInShort) {
        return config.orgInShort
    } else {
        console.log(lack + "orgInShort<string>字段");
        return lackTip
    }
}