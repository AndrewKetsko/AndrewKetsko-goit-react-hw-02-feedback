import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";


class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    buttonClick = (e) => { 
        const value = e.currentTarget.innerHTML;
        this.setState(prev => {return { [value]: prev[value] + 1 }});
    };
    
    countTotalFeedback = () =>
        Object.values(this.state).reduce((acc, value) => acc += value, 0);
    
    countPositiveFeedbackPercentage = () =>
        this.countTotalFeedback() === 0 ?
            0 : Math.floor(this.state.good * 100 / this.countTotalFeedback());

    render() {
        return <>
            <Section
                title={'Please leave feedback'}
                children={<FeedbackOptions buttonClick={this.buttonClick} />}
            />

            <Section
                title={'Statistics'}
                children={
                    this.countTotalFeedback() > 0 ?
                        <Statistics
                            state={this.state}
                            countTotalFeedback={this.countTotalFeedback}
                            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
                        /> :
                        <Notification message={ 'There is no feedback' } />
                }
            />
        </>
    }
};

export default Feedback;