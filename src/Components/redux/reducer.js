import {
  CHANGE_ATTEMPTQUESTION,
  CHANGE_SCORE,
  GET_QUESTION_LIST,
  GET_QUESTION_LIST_FAILED,
  GET_QUESTION_LIST_SUCCESS,
  RESTART_QUIZ,
  SELECTED_ANSWER,
} from "./const";

const initialState = {
  dataList: [],
  isLoading: false,
  score: 0,
  attemptQuestion: 0,
};
const userData = (data) => {};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_ATTEMPTQUESTION:
      
      return {
        ...state,

        attemptQuestion: action.payload,
      };

    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case GET_QUESTION_LIST:
      return { ...state, isLoading: true };
    case GET_QUESTION_LIST_FAILED:
      return { ...state, isLoading: false };
    case GET_QUESTION_LIST_SUCCESS:
      return { ...state, isLoading: false, dataList: action.data };
    case SELECTED_ANSWER:
     let updatedState = {
       ...state.dataList,
       results: state.dataList.results.map(
         (item) =>
           item.question === action.payload.question.question // Loop through the array to find the post you want to modify
             ? { ...item, selectedAnswer: action.payload.name }
             : item // Copy the post state and then modify it. Else return the same object.
       ),
     };
      return {
        ...state,
        dataList:  updatedState,
      };
    case RESTART_QUIZ:
      return initialState;
    default:
      return state;
  }
}
