import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT } from './actions';

interface actionType {
    type: string
}

const initialState = {
    //初始化state
}

function logIn(state = initialState, action: actionType) {
    switch (action.type) {
        case LOG_IN:
            return Object.assign({}, state, {

            })
        default: return state
    }
}

const AtStore = combineReducers({
    logIn,
})

export default AtStore