import React from "react";
import style from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ changeStats }) => {
  return (
    <>
      <div className="btnWrapper">
        <button className={style.btn} type="button" name="good" onClick={changeStats}>
          Good
        </button>
        <button className={style.btn} type="button" name="neutral" onClick={changeStats}>
          Neutral
        </button>
        <button className={style.btn} type="button" name="bad" onClick={changeStats}>
          Bad
        </button>
      </div>
    </>
  );
};

export default FeedbackOptions;
