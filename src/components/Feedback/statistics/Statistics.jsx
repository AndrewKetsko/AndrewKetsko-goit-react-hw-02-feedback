import React from "react";
import PropTypes from 'prop-types';
import { List, ListEl, Text } from './Statistics.styled';

export default function Statistics({state, total, countPositiveFeedbackPercentage}) { 
    return <>
            <List>
                <ListEl><Text>GOOD: { state.good }</Text></ListEl>
                <ListEl><Text>NEUTRAL: { state.neutral }</Text></ListEl>
                <ListEl><Text>BAD: {state.bad}</Text></ListEl>
            </List>
            <List>
                <ListEl><Text>TOTAL: { total }</Text></ListEl>
                <ListEl><Text>POSITIVE: { countPositiveFeedbackPercentage() } %</Text></ListEl>
            </List>
    </>
};

Statistics.propTypes = {
    state: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired
};
