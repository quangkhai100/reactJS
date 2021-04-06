import * as blogApis from "./../apis/blog";
import * as blogConstants from "./../constants/blog";
export const fetchListBlog = () => {
  return {
    type: blogConstants.FETCH_BLOGS,
  };
};

export const fetchListBlogSuccess = (data) => {
  return {
    type: blogConstants.FETCH_BLOGS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListBlogFailed = (error) => {
  return {
    type: blogConstants.FETCH_BLOGS_FAILED,
    payload: {
      error,
    },
  };
};
// export const fetchListBlogRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchListBlog());
//     blogApis
//       .getList()
//       .then((res) => {
//         dispatch(fetchListBlogSuccess(res.data.data));
//       })
//       .catch((error) => {
//         dispatch(fetchListBlogFailed(error));
//       });
//   };
// };
