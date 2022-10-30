import React from "react";
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { restartQuiz } from "./redux/action";
const Result = () => {
  const dispatch = useDispatch();
  const { score, attemptQuestion, dataList } = useSelector(
    (state) => state.reducer
  );
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handlePlayAgain = () => {
    dispatch(restartQuiz());
    navigate("/questions");
  };
  let attemptQuestionData = dataList.results.map(
    (e) => e.selectedAnswer !== e.correctAnswer
  ).length;
  return (
    <div>
      <br />
      <CheckCircleOutlined className={styles.result__icon} />
      <h1 className={styles.result__h1__result}>Result</h1>
      <Card className={styles.result__card__main}>
        <h1 className={styles.result__h1__review}>You need more practice!</h1>
        <h1 className={styles.result__h1_score}>
          Your Score :{Math.abs(score / dataList.results.length) * 100}%
        </h1>
        <p>Total number of questions :<span style={{ marginLeft : 530}} >{dataList.results.length}</span> </p>
        <p>
          Number of Attempted questions :<span style={{ marginLeft : 490}} >{dataList.results.filter((e) => e.selectedAnswer).length}</span>
          
        </p>
        <p>Number of Correct Answers : <span style={{ marginLeft : 520}} >{score}</span>  </p>
        <p>Number of Wrong Answers :    <span style={{ marginLeft : 520}} > {dataList.results.length - score}</span>            </p>
      </Card>
      <br />
      <Button
        type="ghost"
        className={styles.result__btn_playagain}
        onClick={handlePlayAgain}>
        Play Again
      </Button>
      <Button
        type="ghost"
        className={styles.result__btn_back}
        onClick={handleHome}>
        Back to Home
      </Button>
    </div>
  );
};

export default Result;
