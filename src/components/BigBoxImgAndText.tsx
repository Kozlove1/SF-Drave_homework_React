import * as React from "react";
import Image from "./Image";

function BigBoxImgAndText(props: {
  classNameForImagePosition: string;
  classNameForImage: string;
  classNameForTextPosition: string;
  classNameForBoxImageAndText: string;
  header: string;
  paragraph: string;
  src: string,
  alt: string,
  
}) {
  return (
    <div className={props.classNameForBoxImageAndText}>
      <div className={props.classNameForImagePosition}>
        <Image className={props.classNameForImage} src={props.src} alt={props.alt} />
      </div>
      <div className={props.classNameForTextPosition}>
        <h2 className="TextH2_About">{props.header}</h2>
        <p className="TextP_About"> {props.paragraph}</p>
      </div>
    </div>
  );
}

export default BigBoxImgAndText;
