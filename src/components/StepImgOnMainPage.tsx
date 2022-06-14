import * as React from "react";

import Image from "./Image";

function StepBox(props: {
  classForStepImg: string;
  classForLineStep: string;
  src: string;
  srcLine: string;
  alt?: string;
  paragraph?: string | React.ReactElement;
}) {
  return (
    <>
        <Image
          className={props.classForStepImg}
          src={props.src}
          alt={props.alt}
        />
        <Image className={props.classForLineStep} src={props.srcLine} />
      </>
  );
}

export default StepBox;
