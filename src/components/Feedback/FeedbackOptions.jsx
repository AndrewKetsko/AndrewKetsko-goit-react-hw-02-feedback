import React from "react";

export default function FeedbackOptions({buttonClick}) {
return <>
    {/* <p>Please leave feedback</p> */}
        <ul>
            <li><button type="button" onClick={buttonClick}>good</button></li>
            <li><button type="button" onClick={buttonClick}>neutral</button></li>
            <li><button type="button" onClick={buttonClick}>bad</button></li>
        </ul>
    </>
};