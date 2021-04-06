import * as types from '../constants/index'
import apiCaller from "../utils/apiCaller"

export const actionRegisterRequest = (body)=> {
    return (dispatch)=>{
        return apiCaller('register/', 'POST', body).then(
            res=> {
                if (!res.data.errors){
                    dispatch(actionRegister(res.data))
                }
                
            }
        )
    }
}

export const actionRegister = (body) => {
    return {
        type: types.REGISTER_MEMBER,
        body
    }

}
