import * as React from "react";

import "../FAQ/FaqNew.css";

import Image from "./Image";

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

  return (
    <>
      <button className="questions__box-collapsible" type="button">
        {props.question}
        {imageButtonOnQuestionBox.map((imageButton) => (
          <Image
            className={imageButton.className}
            src={imageButton.src}
            alt={imageButton.alt}
          />
        ))}
      </button>
      <div className="questions__answer-box">
        <p className="questions__answer-text">{props.answer}</p>
      </div>
    </>
  );
}

export default Question_box;
