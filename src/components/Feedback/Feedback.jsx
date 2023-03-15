import React from "react";

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
    
    countTotalFeedback = () => Object.values(this.state).reduce((acc, value) => acc += value , 0);
    
    countPositiveFeedbackPercentage = () => this.countTotalFeedback() === 0 ? 0 : Math.floor(this.state.good*100/this.countTotalFeedback());

    render() {
        return<>
            <p>Please leave feedback</p>
            <ul>
                    <li><button type="button" onClick={this.buttonClick}>good</button></li>
                    <li><button type="button" onClick={this.buttonClick}>neutral</button></li>
                    <li><button type="button" onClick={this.buttonClick}>bad</button></li>
            </ul>
            <p>Statistics</p>
            <ul>
                <li><span>GOOD: { this.state.good }</span></li>
                <li><span>NEUTRAL: { this.state.neutral }</span></li>
                <li><span>BAD: {this.state.bad}</span></li>
                <li><span>TOTAL: {this.countTotalFeedback()}</span></li>
                <li><span>POSITIVE: {this.countPositiveFeedbackPercentage()}%</span></li>
            </ul>

        </>
    }
};

export default Feedback;