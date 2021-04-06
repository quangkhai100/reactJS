import axiosService from './../common/axiosService'
import {API_ENDPOINT} from './../constants/index'

const url = 'blog';

export const getList = () =>{
    return axiosService.get(API_ENDPOINT + '/' + url)
};
