import { call, put, fork, all } from "redux-saga/effects";
import { GET_QUESTION_LIST,GET_QUESTION_LIST_SUCCESS,GET_QUESTION_LIST_FAILED } from "./const";

export  function* tryquestionList() {
  try {
    const URL = " https://opentdb.com/api.php?amount=20";
    const response = yield call(fetch, URL);
    const data = yield call([response, "json"]);
  
    yield put({ type: GET_QUESTION_LIST_SUCCESS, data });
  } catch (e) {
    yield put({ type: GET_QUESTION_LIST_FAILED });
  }
}