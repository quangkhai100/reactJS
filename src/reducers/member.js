import * as types from '../constants'

const initialState = []
const member = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_MEMBER:
            return state
        default:
            return state;
    }
};

export default member;