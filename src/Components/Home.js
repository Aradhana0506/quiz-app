import React from "react";
import { Button } from "antd";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";


const Home = () => {
  
  const navigate = useNavigate();
  const handelPlay = () => {
    navigate("/questions");
  };
  

  return (
    <div>
      <h1 className={styles.home__main__h1}>Quiz App</h1>
      <Button className={styles.home__main__btn} onClick={handelPlay}>
        play
      </Button>
    </div>
  );
};

export default Home;
