import React from "react";

export default function Section({ title, children }) {
    // console.log(children);
    return <>
        <section>
            <p>{title}</p>
            {children}
        </section>
    </>
}