import * as React from "react";

function Image(props: {
  className?: string;
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}

export default Image;
