import { Component } from "react";
import Section from "../section/Section";
import FeedbackOptions from "../controls/FeedbackOptions";
import Statistcs from "../statistics/Statistics";
import Notification from "../notification/Notification";

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  changeStats = evt => {
    const statName = evt.target.name;
    this.setState(prevState => ({ [statName]: prevState[statName] + 1 }));
  };

  countTotalFeedback = () => {
    const totalFeedbacks = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const perc = total ? Math.round((this.state.good / total) * 100) : 0;
    // console.log(this.totalFeedbacks);
    // console.log(perc);
    return perc;
  };
  render() {
    const total = this.countTotalFeedback();
    const rate = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Leave feedback">
          <FeedbackOptions changeStats={this.changeStats} />
        </Section>
        {!total ? (
          <Notification messege="No feedbacks yet" />
        ) : (
          <Section title="Statistics">
            <Statistcs good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} rate={rate} />
          </Section>
        )}
        {/* <h2 className="headline">Please leave feedback</h2>
        <div className="btnWrapper">
          <button type="button" name="good" onClick={this.changeStats}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.changeStats}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.changeStats}>
            Bad
          </button>
        </div>
        <div className="statsDataWrapper">
          <p className="statItem">Good:</p> <span>{this.state.good}</span>
          <p className="statItem">Neutral:</p> <span>{this.state.neutral}</span>
          <p className="statItem">Bad:</p> <span>{this.state.bad}</span>
        </div>

        <div className="statsSummaryWrapper">
          <p className="statItem">Total:</p> <span>{this.state.good + this.state.neutral + this.state.bad}</span>
          <p className="statItem">Positive feedback rate:</p>{" "}
          <span>
            {Math.round(
              ((this.state.good + this.state.neutral) / (this.state.good + this.state.neutral + this.state.bad)) * 100
            )}
          </span>
          %<span />
        </div> */}
      </>
    );
  }
}

export default Feedback;
