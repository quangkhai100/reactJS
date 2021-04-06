import { fork, take, call, put, delay } from "redux-saga/effects";
import * as blogTypes from "./../constants/blog";
import { getList } from "./../apis/blog";
import { STATUS_CODE } from "./../constants/index";
import { fetchListBlogFailed, fetchListBlogSuccess } from "../actions/blog";
import { hideLoading, showLoading } from "../actions/ui";
function* watchFetchListBlogAction() {
  while (true) {
    yield take(blogTypes.FETCH_BLOGS);
    yield put(showLoading());
    //block
    const resp = yield call(getList);
    //block
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      //dispatch action fetchListBlogSuccess
      yield put(fetchListBlogSuccess(data.data));
    } else {
      yield put(fetchListBlogFailed(data));
      //dispatch action fetchlistBlogFailed
    }
    yield delay(1000);
    yield put(hideLoading());

    console.log(resp);
  }
}

// function* watchCreateBlogAction() {
//   console.log("watching create task action");
// }

function* rootSaga() {
  yield fork(watchFetchListBlogAction); //unblock
}
export default rootSaga;
