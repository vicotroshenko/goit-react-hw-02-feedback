import React, { Component } from "react";
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section'


export class App extends Component {
  constructor(){
    super()
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  handleOnClick = event => {
    const { name } = event.target;
    this.setState({ [name]: this.state[name] +1 })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let totalCount = good+neutral+bad;
    return totalCount;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const goodFeedbackPer = (good / (good+neutral+bad))*100;
    let goodFeedbackPerFloor = Math.floor(goodFeedbackPer);
    return goodFeedbackPerFloor;
  }

  render() {
    const statState = this.state;
    const buttonsNameState = Object.keys(statState);
    const totalCount = this.countTotalFeedback();
    const goodFeedbackPer = this.countPositiveFeedbackPercentage();
    return (
      <div style={{ marginLeft: 50}}>
        <Section title="Please leave feedback">
            <FeedbackOptions options={buttonsNameState} onLeaveFeedback={this.handleOnClick} />
        </Section>
        {totalCount >0 ? 
        <Section title="Stastics">
            <Statistics 
                good={statState.good} 
                neutral={statState.neutral} 
                bad={statState.bad} 
                total={totalCount} 
                positivePercentage={goodFeedbackPer}/>
        </Section> : <p>No feedback given</p>}
      </div>  
    )
  }
}
