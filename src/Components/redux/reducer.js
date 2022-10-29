import { GET_QUESTION_LIST,GET_QUESTION_LIST_FAILED,GET_QUESTION_LIST_SUCCESS } from "./const";
const initialState = {
    dataList: [],
    isLoading: false,
  };
  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case GET_QUESTION_LIST:
        return { ...state, isLoading: true };
      case GET_QUESTION_LIST_FAILED:
        return { ...state, isLoading: false };
      case GET_QUESTION_LIST_SUCCESS:
        return { ...state, isLoading: false, dataList: action.data };
        default:
            return state;
        }}