import React from "react";
import PropTypes from 'prop-types';
import { Button, List, ListEl } from "./FeedbackOptions.styled";

export default function FeedbackOptions({buttonClick, options}) {
return (
  <>
    {/* <p>Please leave feedback</p> */}
    <List>
      {options.map(option => (
        <ListEl key={option}>
          <Button type="button" onClick={buttonClick}>
            {option}
          </Button>
        </ListEl>
      ))}
    </List>
  </>
);
};

FeedbackOptions.propTypes = {
    buttonClick: PropTypes.func.isRequired
};