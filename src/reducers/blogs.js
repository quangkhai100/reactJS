import { toastError } from '../helpers/toastHelper';
import * as blogConstants from './../constants/blog'
const initialState = { listblog: []}
// var findIndex = (blogs, id) => {
//     var result = -1
//     console.log(blogs)
//     blogs.map((blog,index) => {
//         if (blog.id === id){
//             result = index
//         }
//     });
//     return result;
// }
// var findIndexDetail = (blogs, id) => {
//     var result = -1
//     Object.keys(blogs).map((blog,index) => {
//         if (blog.id === id){
//             result = index
//         }
//     });
//     return result;
// }
const blogs = (state = initialState, action) =>{
    // var index = -1;
    // var { id,blog } = action
    switch (action.type) {
        case blogConstants.FETCH_BLOGS: 
        {
            return {...state, listblog: []}
        }
        case blogConstants.FETCH_BLOGS_SUCCESS: 
        {
            const {data} =action.payload
            return {...state, listblog: data}
        }
        case blogConstants.FETCH_BLOGS_FAILED: 
        {
            const {error} = action.payload;
            toastError (error);
            return {...state, listblog: []}
        }
            
        // case types.DELETE_BLOG:
        //     index = findIndex(state, id)
        //     state.splice(index,1)
        //     return [...state]
        // case types.ADD_BLOG:
        //     state.push(action.blog)
        //     return [...state]
        // case types.EDIT_BLOG:
        //     state = action.blog;        
        //     return [...state]
        // case types.UPDATE_BLOG:
        //     index = findIndexDetail(state, blog.id )
        //     state[index] = blog;
        //     return [...state]
        default:
            return state;
    }
};

export default blogs;