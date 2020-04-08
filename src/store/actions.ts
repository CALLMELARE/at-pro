//Redux actions
interface actionType {
    type: string
}
// action 类型

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

//其他变量

//action 创建函数

export function logIn() {
    return {
        type: typeof LOG_IN
    }
}