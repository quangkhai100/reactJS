import * as types from '../constants/blog'
import apiCaller from "../utils/apiCaller"

export const actionFetchBlogsRequest = ()=> {
    return (dispatch)=>{
        return apiCaller('blog','GET',null).then(
            res=> {
               dispatch(actionFetchBlogs(res.data.data)) 
            }
        )
    }
}

export const actionFetchBlogs = (blogs) => {
    return {
        type: types.FETCH_BLOGS,
        blogs
    }

}
export const actDeleteBlogRequest = (id)=>{
    return (dispatch)=>{
        return apiCaller('blog/'+ id,'DELETE',null).then(
            res=>{
                dispatch(actDeleteBlog(id))
            }
        )
    }
}

export const actDeleteBlog = (id) => {
    return {
        type: types.DELETE_BLOG,
        id
    }
}

export const actAddBlogRequest = (blog) => {
    return (dispatch) => {
        return apiCaller('blog/','POST',blog).then(
            res=> {
                dispatch(actAddBlog(res.data))
            }
        )
    }
}

export const actAddBlog = (blog) => {
    return {
        type: types.ADD_BLOG,
        blog
    }
}

export const actGetBlogRequest = (id) =>{
        return dispatch => {
            return apiCaller('blog/' + id,'GET',null).then(
                res=>{
                    dispatch(actGetBlog(res.data))
                }
            )
        }
}
export const actGetBlog = (blog) => {
    return {
        type: types.EDIT_BLOG,
        blog
    }
}
export const actUpdateBlogRequest = (blog) =>{
    return dispatch => {
        return apiCaller('blog/' + blog.id,'PUT',blog).then(
            res => {dispatch(actUpdateBlog(res.data))}
        )
    }
}
export const actUpdateBlog = (blog) => {
    return {
        type: types.UPDATE_BLOG,
        blog
    }
}



 