import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";


class Feedback extends React.Component {

    state = {
        total: Object.values(this.props.state).reduce((acc, value) => acc += value, 0)
    };

    buttonClick = (e) => { 
        this.props.state[e.currentTarget.innerHTML] += 1;
        this.setState(prev => {return { total: prev.total + 1 }});
    };
    
    // countTotalFeedback = () => {
    //     // console.log(Object.values(this.props.state));
    //     Object.values(this.props.state).reduce((acc, value) => acc += value, 0);
    // }
    
    countPositiveFeedbackPercentage = () =>
        this.state.total === 0 ?
            0 : Math.floor(this.props.state.good * 100 / this.state.total);

    render() {
        return <>
            <Section
                title={'Please leave feedback'}
                children={<FeedbackOptions buttonClick={this.buttonClick} />}
            />

            <Section
                title={'Statistics'}
                children={
                    this.state.total > 0 ?
                        <Statistics
                            state={this.props.state}
                            total={this.state.total}
                            // countTotalFeedback={this.countTotalFeedback}
                            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
                        /> :
                        <Notification message={ 'There is no feedback' } />
                }
            />
        </>
    }
};

export default Feedback;