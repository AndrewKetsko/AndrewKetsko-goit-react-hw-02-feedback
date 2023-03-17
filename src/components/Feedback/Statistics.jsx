import React from "react";

export default function Statistics({state, countTotalFeedback, countPositiveFeedbackPercentage}) { 
    return <>
            <ul>
                <li><span>GOOD: { state.good }</span></li>
                <li><span>NEUTRAL: { state.neutral }</span></li>
                <li><span>BAD: { state.bad }</span></li>
                <li><span>TOTAL: { countTotalFeedback() }</span></li>
                <li><span>POSITIVE: { countPositiveFeedbackPercentage() } %</span></li>
            </ul>
    </>
}