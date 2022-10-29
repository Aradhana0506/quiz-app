import { takeEvery } from "redux-saga/effects";
import { GET_QUESTION_LIST } from "../redux/const";
import {tryquestionList} from '../redux/saga';
export default function* rootSaga() {
  yield takeEvery(GET_QUESTION_LIST, tryquestionList);
}