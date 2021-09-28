import React from "react";
import style from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className="btnWrapper">
        {options.map(option => (
          <button className={style.btn} key={option} type="button" name={option} onClick={onLeaveFeedback}>
            {option.toUpperCase()}
          </button>
        ))}
        {/* <button className={style.btn} type="button" name="good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button className={style.btn} type="button" name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button className={style.btn} type="button" name="bad" onClick={onLeaveFeedback}>
          Bad
        </button> */}
      </div>
    </>
  );
};

export default FeedbackOptions;
