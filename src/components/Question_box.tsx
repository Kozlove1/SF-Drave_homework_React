import * as React from "react";

import "../FAQ/FaqNew.css";

import Image from "./Image";
import { ClassLists } from "./ClassLists";

function Question_box(props: { question: string; answer: string }) {
  let imageButtonOnQuestionBox = [
    {
      className: "questions__answer-button-down",
      src: "img/Down.png",
      alt: "раскрыть ответ",
    },
    {
      className: "questions__answer-button-up",
      src: "img/Up.png",
      alt: "свернуть ответ",
    },
  ];

  const [classNameActive, setClassNameActive] = React.useState(
    ClassLists.notActive
  );

  return (
    <>
      <button
        className={`questions__box-collapsible ${classNameActive}`}
        type="button"
        onClick={() =>
          setClassNameActive(
            classNameActive === ClassLists.notActive
              ? ClassLists.active
              : ClassLists.notActive
          )
        }
      >
        {props.question}
        {imageButtonOnQuestionBox.map((imageButton) => (
          <Image
            className={imageButton.className}
            src={imageButton.src}
            alt={imageButton.alt}
          />
        ))}
      </button>
      <div className="questions__answer-box" style={{maxHeight: classNameActive === ClassLists.active ? "2em" : null}}>
        <p className="questions__answer-text">{props.answer}</p>
      </div>
    </>
  );
}

export default Question_box;
