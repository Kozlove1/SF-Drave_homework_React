import * as React from "react";
import Image from "./Image";

function BigBoxImgAndText(props: {
  classNameForImagePosition: string;
  classNameForImage: string;
  classNameForTextPosition: string;
  header: string;
  paragraph: string;
  src: string,
  alt: string,
  
}) {
  return (
    <>
      <div className={props.classNameForImagePosition}>
        <Image className={props.classNameForImage} src={props.src} alt={props.alt} />
      </div>
      <div className={props.classNameForTextPosition}>
        <h2>{props.header}</h2>
        <p> {props.paragraph}</p>
      </div>
    </>
  );
}

export default BigBoxImgAndText;
