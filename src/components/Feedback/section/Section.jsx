import React from "react";
import PropTypes from 'prop-types';
import { Title } from "./Section.styled";

export default function Section({ title, children }) {
    // console.log(children);
    return <>
        <section>
            <Title>{title}</Title>
            {children}
        </section>
    </>
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};