import React from "react";
import PropTypes from 'prop-types';
import { Button, List, ListEl } from "./FeedbackOptions.styled";

export default function FeedbackOptions({buttonClick}) {
return <>
    {/* <p>Please leave feedback</p> */}
        <List>
            <ListEl><Button type="button" onClick={buttonClick}>good</Button></ListEl>
            <ListEl><Button type="button" onClick={buttonClick}>neutral</Button></ListEl>
            <ListEl><Button type="button" onClick={buttonClick}>bad</Button></ListEl>
        </List>
    </>
};

FeedbackOptions.propTypes = {
    buttonClick: PropTypes.func.isRequired
};