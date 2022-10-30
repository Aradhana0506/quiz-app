import React, { useEffect, useState } from "react";
import { Button, Card, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import {
  handleAttemptQuestion,
  handleScoreChange,
  questions,
  restartQuiz,
  selectedAnswer,
} from "./redux/action";
import { useSelector, useDispatch } from "react-redux";
import Qdata from "../enum";
import { convertHTMLEntity } from "../const";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
const Questions = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.reducer);
  const questionList = useSelector((state) => state.reducer.dataList);
  const { score, attemptQuestion } = useSelector((state) => state.reducer);
  useEffect(() => {
    if (!questionList.results) dispatch(questions());
  }, [questionList, dispatch]);

  useEffect(() => {
    if (questionList && questionList.results && questionList?.results.length) {
      const question = questionList.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [questionIndex, questionList]);

  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (questionIndex + 1 < questionList.results.length) {
      setQuestionIndex(questionIndex + 1);
    }
  };
  const handlePrevQuestion = () => {
    if (questionIndex !== 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const handleClickAnswer = (event) => {
    const question = questionList.results[questionIndex];
    if (event.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }
    dispatch(selectedAnswer({ name: event.target.textContent, question }));
    dispatch(handleAttemptQuestion(attemptQuestion + 1));
    if (questionIndex + 1 < questionList.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/result");
    }
  };
  const handleQuit = () => {
    dispatch(restartQuiz());
    navigate("/");
  };
  const gotoResult=()=>{
    navigate("/result")
  }
  if (isLoading) {
    return (
      <Card className={styles.question__main__card}>
        <Spin />
      </Card>
    );
  }
  return (
    questionList.results && (
      <Card className={styles.question__main__card}>
        <center>
          <h1>Question {questionIndex + 1}</h1>
        </center>
        <h2 mt={5}>
          {convertHTMLEntity(questionList.results[questionIndex].question)}
        </h2>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {options.map((data, id) => {
            let bValue = questionList.results.find(
              (e) => e.question === questionList.results[questionIndex].question
            );

            // console.log("SELECTED OR NOT", bValue , "DATA");
            return (
              <div className={styles.question__btn__div} key={id}>
                <Button
                  type={
                    bValue.selectedAnswer === convertHTMLEntity(data)
                      ? "ghost"
                      : "primary"
                  }
                  onClick={handleClickAnswer}
                  className={styles.question__btn__option}
                  style={{ padding: "5px", margin: "10px" }}>
                  {convertHTMLEntity(data)}
                </Button>
                <br />
              </div>
            );
          })}
          <br />
        </div>
        <br />
        <br />
        <div className={styles.question__lower__btn}>
          <Button
            type="primary"
            onClick={handlePrevQuestion}
            className={styles.question__btn__prev}>
            Previous
          </Button>
          {questionIndex + 1 < questionList.results.length ? (
            <Button
              type="primary"
              onClick={handleNextQuestion}
              className={styles.question__btn__next}>
              Next
            </Button>
          ) : (
            <Button className={styles.question__btn__next} onClick={gotoResult}>
              Result
            </Button>
          )}
          <Button
            type="primary"
            className={styles.question__btn__quit}
            onClick={handleQuit}>
            Quit
          </Button>
        </div>
        {/* <div mt={5}>
        Score: {score} / {Qdata.length}
      </div> */}
      </Card>
    )
  );
};

export default Questions;
