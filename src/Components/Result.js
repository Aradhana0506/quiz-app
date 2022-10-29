import React from "react";
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { CheckCircleOutlined } from '@ant-design/icons';
import styles from "./Home.module.css";
const Result = () => {
  const navigate = useNavigate();
  const handelHome = () => {
    navigate("/");
  };
  const handelPlayAgain = () => {
    navigate("/questions");
  };
  return (
    <div>
      <br/>
      <CheckCircleOutlined className={styles.result__icon} />
      <h1 className={styles.result__h1__result}>Result</h1>
      <Card className={styles.result__card__main}>
        <h1 className={styles.result__h1__review}>Congratulations!</h1>
        <h1 className={styles.result__h1_score}>Your Score :%</h1>
        <p>Total number of questions</p>
        <p>Number of Attempted questions </p>
        <p>Number of Correct Answers</p>
        <p>Number of Wrong Answers</p>
      </Card>
      <br />
      <Button
        type="ghost"
        className={styles.result__btn_playagain}
        onClick={handelPlayAgain}
      >
        Play Again
      </Button>
      <Button
        type="ghost"
        className={styles.result__btn_back}
        onClick={handelHome}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default Result;
