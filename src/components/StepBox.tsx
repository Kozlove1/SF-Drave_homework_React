import * as React from "react";

import Image from "./Image";

function StepBox(props: {
  classNameForImg: string;
  src: string;
  srcLine?: string;
  alt?: string;
  paragraph?: string | React.ReactElement;
  classForBox: string;
}) {
  return (
    <div className="classForBoxInBox">
      <div className={props.classForBox}>
        <Image
          className={props.classNameForImg}
          src={props.src}
          alt={props.alt}
        />
        <Image className={props.classNameForImg} src={props.srcLine} />
      </div>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default StepBox;
