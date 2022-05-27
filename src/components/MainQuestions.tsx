import * as React from "react";

import "../FAQ/FaqNew.css";

import Question_box from "./Question_box";
import Image from "./Image";

import "../img/undraw_questions.png";
import "../img/Up.png";
import "../img/Down.png";

function MainQuestions(props: {}) {
  let contentQuestionBox = [
    {
      question: "Могу ли я отменить бронь?",
      answer: "Да, в приложении",
    },
    {
      question: "Могу ли я вернуть деньги, если не подошёл автомобиль?",
      answer: "Возможно, но не точно",
    },
    {
      question: "Что делать, если случилось ДТП?",
      answer: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
    },
    {
      question: "Могу ли я оставить автомобиль в удобном для меня месте?",
      answer:
        "Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.",
    },
    {
      question: "Что делать, если собственник просит заплатить ему напрямую?",
      answer: "Настучать на него в службу поддержки",
    },
    {
      question: "Должен ли я заправлять автомобиль?",
      answer: "По необходимости",
    },
  ];

  return (
    <>
      <div className="drawQuestion">
        <Image
          className={"drawQuestion__img"}
          src={"img/undraw_questions.png"}
          alt={"Картинка команды"}
        />
      </div>
      <h1>Частые вопросы</h1>
      <p className="question__info">
        Отвечаем на вопросы, которые у вас могут возникнуть.
      </p>
      <section className="questions">
        <div className="questions__container">
          {contentQuestionBox.map((content) => (
            <Question_box key={content.question} question={content.question} answer={content.answer} />
          ))}
        </div>
      </section>
    </>
  );
}

export default MainQuestions;
