import * as React from "react";

function Link (props) {

    return(
        <a className={props.className} href={props.href}>{props.children}</a>
    );
};

export default Link