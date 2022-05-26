import * as React from "react";

function Link (props) {

    return(
        <a className={props.className} href={props.href}>{props.content}</a>
    );
};

export default Link