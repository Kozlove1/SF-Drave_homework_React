import * as React from "react";

import Image from "./Image";

function StepBox(props: {
    className: string;
    src: string;
    alt: string;
    paragraph: string;
}) {
  return (
    <>
      <Image className={props.className} src={props.src} alt={props.alt} />
      <p>{props.paragraph}</p>
    </>
  );
}

export default StepBox;
