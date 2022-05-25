import * as React from "react";

function MainQuestions (props) {
    return(
        <>
         <div className="drawQuestion"><img className="drawQuestion__img" src="img/undraw_questions.png" alt="Картинка команды"/></div>
            <h1>Частые вопросы</h1>
                <p className="question__info">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
        </>
    );
};

export default MainQuestions;