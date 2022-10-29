import React from "react";
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
const Questions = () => {
  const navigate = useNavigate();
  const handelQuit = () => {
    navigate("/");
  };
  return (
    <div>
      <Card className={styles.question__main__card}>
        <center>
          <h1>Question</h1>
        </center>
        <div className={styles.question__btn__div}>
          <Button type="primary" className={styles.question__btn__option}>
            A
          </Button>
          <Button type="primary" className={styles.question__btn__option}>
            B
          </Button>
        </div>
        <br />
        <div className={styles.question__btn__div}>
          <Button type="primary" className={styles.question__btn__option}>
            C
          </Button>
          <Button type="primary" className={styles.question__btn__option}>
            D
          </Button>
        </div>
        <br />
        <br />
        <div className={styles.question__lower__btn}>
          <Button type="primary" className={styles.question__btn__prev}>
            Previous
          </Button>
          <Button type="primary" className={styles.question__btn__next}>
            Next
          </Button>
          <Button
            type="primary"
            className={styles.question__btn__quit}
            onClick={handelQuit}
          >
            Quit
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Questions;