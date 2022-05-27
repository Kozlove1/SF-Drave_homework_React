import * as React from "react";

function Link(props: {
  className: string;
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <a className={props.className} href={props.href} onClick={props.onClick}>
      {props.children}
    </a>
  );
}

export default Link;
