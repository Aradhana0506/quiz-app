import {
  CHANGE_SCORE,
  GET_QUESTION_LIST,
  RESTART_QUIZ,
  CHANGE_ATTEMPTQUESTION,
  SELECTED_ANSWER,
} from "./const";
export function questions() {
  return {
    type: GET_QUESTION_LIST,
  };
}
export const selectedAnswer=(payload)=>{
  console.log(payload,"payload")
    return {
        type:SELECTED_ANSWER,
        payload
    }
}
export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});
export const restartQuiz = () => {
  return {
    type: RESTART_QUIZ,
  };
};

export const handleAttemptQuestion = (payload) => ({
  type: CHANGE_ATTEMPTQUESTION,
  payload,
});